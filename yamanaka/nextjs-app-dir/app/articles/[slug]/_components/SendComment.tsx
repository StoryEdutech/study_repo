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
} from "@/app/_common/components";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { getCookie, getCsrfToken } from "@/app/_common/fucntions";

export default function SendComment({ slug }: { slug: string }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [avaterUrl, setAvaterUrl] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const csrf = await getCsrfToken();
    if (csrf.ok) {
      const token = await getCookie("XSRF-TOKEN");
      const res = await fetch(
        `http://localhost:8000/api/articles/${slug}/comments`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": token,
          },
          body: JSON.stringify({ name, avaterUrl, body }),
        }
      );
      setLoading(false);
      if (res.ok) {
        startTransition(() => {
          setBody("");
          setIsInvalid(false);
          router.refresh();
        });
      } else {
        setIsInvalid(true);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl mt={8} isInvalid={isInvalid}>
        <VStack alignItems="start">
          <Heading size="md" mb={4}>
            コメントを送信
          </Heading>
          <FormLabel>名前</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
          <FormLabel>アバターURL</FormLabel>
          <HStack width="100%">
            <Avatar size="sm" src={avaterUrl} name={name} />
            <Input
              value={avaterUrl}
              flex={1}
              onChange={(e) => setAvaterUrl(e.target.value)}
            />
          </HStack>
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
}
