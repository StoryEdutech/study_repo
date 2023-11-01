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

  async function getCsrfToken() {
    const res = await fetch("http://localhost:8000/sanctum/csrf-cookie", {
      cache: "no-store",
      credentials: "include",
    });
    return res;
  }
  async function getCookie(key: string) {
    const cookies = document.cookie.split("; ");
    const check = async (key: string, str: string) => {
      const arr = str.split("=");
      const res = key == arr[0] ? decodeURIComponent(arr[1]) : false;
      return res;
    };
    let ans = "";
    const res = await Promise.all(
      cookies.map(async (cookie) => {
        const found = await check(key, cookie);
        if (found != false) ans = found;
      })
    );
    return ans;
  }

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
