"use client";

import { useState, useTransition, useContext } from "react";
import { useRouter } from "next/navigation";
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
} from "@/app/_lib/components";
import postArticle from "@/app/_lib/api/postArticle";
import { LoginContext } from "@/app/_lib/components/AuthProvider";

export default function CreateArticle() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { isLogin, setIsLogin } = useContext(LoginContext);

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
      if (res == 401) {
        setIsLogin(false);
      }
      setIsInvalid(true);
    }
  };
  if (isLogin) {
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
    router.push("/login");
  }
}
