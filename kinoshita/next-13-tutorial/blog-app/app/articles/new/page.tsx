"use client"

import { Dispatch, SetStateAction, memo, useCallback, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import {
    Heading,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
} from "@/lib/components"

const CreateArticle = () =>  {

  const router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isLoading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    await fetch("/api/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    })
    setLoading(false)
    router.push("/") 
    // router.refreshは不要
  }

  return (
        <div>
        <Heading mb={4}>Create Article</Heading>

        <form onSubmit={handleSubmit}>
            <FormControl>
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
                isLoading={isLoading}
                mt={4}
            >
                作成
            </Button>
            </FormControl>
        </form>
        </div>
    )
}

export default CreateArticle
