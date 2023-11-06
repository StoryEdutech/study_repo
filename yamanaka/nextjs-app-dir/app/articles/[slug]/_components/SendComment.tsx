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
} from "@/app/_common/components";
import NextLink from "next/link";
import { useState, useTransition, useEffect } from "react";
import { useRouter } from "next/navigation";
import postComment from "@/app/_lib/api/postComment";
import getUser from "@/app/_lib/api/auth/getUser";
import type { User } from "@/app/_common/types";

export default function SendComment({ slug }: { slug: string }) {
  const router = useRouter();
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [user, setUser] = useState<User | number | undefined>(undefined);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const authCheck = async () => {
      setUser(await getUser());
      setChecked(true);
    };
    authCheck();
  }, []);

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
      setIsInvalid(true);
    }
  };
  if (checked) {
    if (typeof user == "object") {
      return (
        <form onSubmit={handleSubmit}>
          <FormControl mt={8} isInvalid={isInvalid}>
            <VStack alignItems="start">
              <Heading size="md" mb={4}>
                コメントを送信
              </Heading>
              <FormLabel>コメント</FormLabel>
              <Textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
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
  } else {
    return (
      <VStack alignItems="start">
        <Heading size="md" mt={8}>
          コメントを送信
        </Heading>
        <Skeleton width="100%" height="56px" />
      </VStack>
    );
  }
}
