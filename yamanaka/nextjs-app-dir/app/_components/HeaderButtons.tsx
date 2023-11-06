"use client";
import { Button, HStack } from "@/app/_lib/components";
import NextLink from "next/link";
import { useContext } from "react";
import logout from "@/app/_lib/api/auth/logout";
import { useRouter } from "next/navigation";
import { LoginContext } from "@/app/_lib/components/AuthProvider";

export default function HeaderButtons() {
  const router = useRouter();
  const { isLogin, setIsLogin } = useContext(LoginContext);

  const handleLogout = async () => {
    const res = await logout();
    if (typeof res == "number" && 200 <= res && res < 300) {
      setIsLogin(false);
      router.push("/");
      router.refresh();
    }
  };

  if (isLogin) {
    return (
      <HStack>
        <Button
          as={NextLink}
          fontSize="sm"
          fontWeight={600}
          color="white"
          bg="orange.400"
          href="/articles/new"
          _hover={{
            bg: "orange.300",
          }}
        >
          記事を書く
        </Button>
        <Button
          onClick={handleLogout}
          fontSize="sm"
          fontWeight={600}
          color="white"
          bg="red.400"
          _hover={{
            bg: "red.300",
          }}
        >
          ログアウト
        </Button>
      </HStack>
    );
  } else {
    return (
      <Button
        as={NextLink}
        fontSize="sm"
        fontWeight={600}
        color="white"
        bg="green.400"
        href="/login"
        _hover={{
          bg: "green.300",
        }}
      >
        ログイン
      </Button>
    );
  }
}
