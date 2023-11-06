"use client";

import { useState, useTransition, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  FormErrorMessage,
  Box,
  Spinner,
} from "@/app/_common/components";
import register from "@/app/_lib/api/auth/register";
import { Link } from "@chakra-ui/next-js";
import getUser from "@/app/_lib/api/auth/getUser";

export default function CreateArticle() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, SetPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const authCheck = async () => {
      const user = await getUser();
      if (typeof user == "object") {
        router.push("/");
      } else {
        setChecked(true);
      }
    };
    authCheck();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setIsInvalid(false);
    const res = await register(name, email, password, passwordConfirm);
    setLoading(false);
    if (typeof res == "number" && 200 <= res && res < 300) {
      router.push("/");
      startTransition(() => {
        router.refresh();
      });
    } else {
      setIsInvalid(true);
    }
  };
  if (checked) {
    return (
      <div>
        <Heading mb={4}>ユーザー登録</Heading>

        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={isInvalid}>
            <FormLabel>ユーザー名</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />

            <FormLabel>メールアドレス</FormLabel>
            <Input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormLabel>パスワード</FormLabel>
            <Input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <FormLabel>パスワード（確認）</FormLabel>
            <Input
              value={passwordConfirm}
              type="password"
              onChange={(e) => SetPasswordConfirm(e.target.value)}
            />

            <Button
              type="submit"
              color="white"
              bg="orange.400"
              isLoading={loading || isPending}
              mt={4}
            >
              登録
            </Button>
            <FormErrorMessage>ユーザー登録に失敗しました</FormErrorMessage>
          </FormControl>
        </form>
        <Text mt={4}>
          ログインは
          <Link href="/login" color="teal.500">
            こちら
          </Link>
        </Text>
      </div>
    );
  } else {
    return (
      <Box justifyContent="center" display="flex">
        <Spinner color="orange.400" size="xl" />
      </Box>
    );
  }
}
