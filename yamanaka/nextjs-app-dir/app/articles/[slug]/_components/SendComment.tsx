"use client";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Button,
  Input,
  Heading,
  VStack,
  HStack,
  Avatar,
  Text,
  Link,
  Skeleton,
} from "@/app/_lib/components";
import NextLink from "next/link";
import { useState, useTransition, useContext } from "react";
import { useRouter } from "next/navigation";
import postComment from "@/app/_lib/api/postComment";
import { LoginContext } from "@/app/_lib/components/AuthProvider";

export default function SendComment({ slug }: { slug: string }) {
  const router = useRouter();
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { isLogin, setIsLogin } = useContext(LoginContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const res = await postComment(slug, body);
    setLoading(false);
    setIsInvalid(false);
    if (res == 201) {
      startTransition(() => {
        setBody("");
        setIsInvalid(false);
        router.refresh();
      });
    } else {
      if (res == 401) {
        setIsLogin(false);
      }
      setIsInvalid(true);
    }
  };
  if (isLogin) {
    return (
      <form onSubmit={handleSubmit}>
        <FormControl mt={8} isInvalid={isInvalid}>
          <VStack alignItems="start">
            <Heading size="md" mb={4}>
              コメントを送信
            </Heading>
            <FormLabel>コメント</FormLabel>
            <Textarea value={body} onChange={(e) => setBody(e.target.value)} />
            <Button
              type="submit"
              colorScheme="blue"
              isLoading={loading || isPending}
            >
              送信
            </Button>
            <FormErrorMessage>コメントの送信に失敗しました</FormErrorMessage>
          </VStack>
        </FormControl>
      </form>
    );
  } else {
    return (
      <>
        <Text size="md" mt={8}>
          コメントの送信には
          <Link as={NextLink} href="/login" color="green.400">
            ログイン
          </Link>
          が必要です
        </Text>
      </>
    );
  }
}
