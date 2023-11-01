"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
} from "@/app/_common/components";
import { getCookie, getCsrfToken } from "@/app/_common/fucntions";

export default function CreateArticle() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const csrf = await getCsrfToken();
    if (csrf.ok) {
      const token = await getCookie("XSRF-TOKEN");
      const res = await fetch("http://localhost:8000/api/articles", {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": token,
        },
        body: JSON.stringify({ title, content }),
      });
      setLoading(false);
      if (res.ok) {
        router.push("/");
        startTransition(() => {
          router.refresh();
        });
      } else {
        setIsInvalid(true);
      }
    }
  };

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
}
