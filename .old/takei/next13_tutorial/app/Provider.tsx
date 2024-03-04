// クライアントコンポーネントとして扱えるようにするための対応(chakra公式ドキュメントと同じ方法)
"use client";

import { ChakraProvider } from "@chakra-ui/react";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}