import { Container } from "@/lib/components"
import { NextPage } from "next";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const Main: NextPage<Props> = ({ children }) => {
    return (
        <Container
            as="main"
            maxW="container.lg"
            my="4"
            minH="calc(100vh - 115px - 2rem)"
        >
            {children}
        </Container>
    )
  }

export default Main
