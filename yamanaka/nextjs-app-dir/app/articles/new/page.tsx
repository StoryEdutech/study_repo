"use client";

import { useState, useTransition, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
  Box,
  Spinner,
} from "@/app/_common/components";
import postArticle from "@/app/_lib/api/postArticle";
import getUser from "@/app/_lib/api/auth/getUser";
import type { User } from "@/app/_common/types";

export default function CreateArticle() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [user, setUser] = useState<User | number | undefined>(undefined);
  useEffect(() => {
    const authCheck = async () => {
      const user = await getUser();
      if (typeof user == "object") {
        setUser(user);
      } else {
        router.push("/login");
      }
    };
    authCheck();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setIsInvalid(false);
    const res = await postArticle(title, content);
    setLoading(false);
    if (res == 201) {
      router.push("/");
      startTransition(() => {
        router.refresh();
      });
    } else {
      setIsInvalid(true);
    }
  };
  if (typeof user == "object") {
    return (
      <div>
        <Heading mb={4}>Create Article</Heading>

        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={isInvalid}>
            <FormLabel>タイトル</FormLabel>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />

            <FormLabel>本文</FormLabel>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button
              type="submit"
              color="white"
              bg="orange.400"
              isLoading={loading || isPending}
              mt={4}
            >
              作成
            </Button>
            <FormErrorMessage>記事の作成に失敗しました</FormErrorMessage>
          </FormControl>
        </form>
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
