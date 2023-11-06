"use client";

import { useState, useTransition, useContext } from "react";
import { useRouter } from "next/navigation";
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  FormErrorMessage,
} from "@/app/_lib/components";
import login from "@/app/_lib/api/auth/login";
import { Link } from "@chakra-ui/next-js";
import { LoginContext } from "@/app/_lib/components/AuthProvider";

export default function CreateArticle() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { isLogin, setIsLogin } = useContext(LoginContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setIsInvalid(false);
    const res = await login(email, password);
    setLoading(false);
    if (typeof res == "number" && 200 <= res && res < 300) {
      setIsLogin(true);
      router.push("/");
      startTransition(() => {
        router.refresh();
      });
    } else {
      setIsInvalid(true);
    }
  };
  if (!isLogin) {
    return (
      <div>
        <Heading mb={4}>ログイン</Heading>

        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={isInvalid}>
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

            <Button
              type="submit"
              color="white"
              bg="orange.400"
              isLoading={loading || isPending}
              mt={4}
            >
              ログイン
            </Button>
            <FormErrorMessage>ログインに失敗しました</FormErrorMessage>
          </FormControl>
        </form>
        <Text mt={4}>
          新規登録は
          <Link href="/register" color="teal.500">
            こちら
          </Link>
        </Text>
      </div>
    );
  } else {
    router.push("/");
    router.refresh();
  }
}
