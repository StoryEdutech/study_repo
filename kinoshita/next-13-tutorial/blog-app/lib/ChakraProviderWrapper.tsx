"use client";

import { ChakraProvider } from "@chakra-ui/react"

import { NextPage } from "next";
import type { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const ChakraProviderWrapper: NextPage<Props> = ({ children }) =>  {
    return (
        <ChakraProvider>{children}</ChakraProvider>
    )
}

export default ChakraProviderWrapper
