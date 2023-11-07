"use client";
import { createContext, useState, useEffect } from "react";
import type { User } from "../types";
import getUser from "../api/auth/getUser";

type UserDataContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};
type LoginContextType = {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
};

export const UserDataContext = createContext<UserDataContextType>({
  user: null,
  setUser: () => {},
});
export const LoginContext = createContext<LoginContextType>({
  isLogin: false,
  setIsLogin: () => {},
});

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [isLogin, setIsLogin] = useState(false);
  const authCheck = async () => {
    const res = await getUser();
    if (typeof res == "object") {
      setUser(res);
      setIsLogin(true);
    }
  };
  useEffect(() => {
    authCheck();
  }, []);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      <UserDataContext.Provider value={{ user, setUser }}>
        {children}
      </UserDataContext.Provider>
    </LoginContext.Provider>
  );
}
