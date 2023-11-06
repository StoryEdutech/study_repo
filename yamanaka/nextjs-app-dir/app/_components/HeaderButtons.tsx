"use client";
import { Button, HStack } from "@/app/_common/components";
import NextLink from "next/link";
import getUser from "@/app/_lib/api/auth/getUser";
import type { User } from "@/app/_common/types";
import { useState, useEffect } from "react";
import logout from "@/app/_lib/api/auth/logout";
import { useRouter } from "next/navigation";

export default function HeaderButtons() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState<User | number | undefined>(undefined);
  useEffect(() => {
    const authCheck = async () => {
      const user = await getUser();
      setChecked(true);
      setUser(user);
    };
    authCheck();
  }, []);

  const handleLogout = async () => {
    await logout();
    router.push("/");
    router.refresh();
  };

  if (checked) {
    if (typeof user == "object") {
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
}
