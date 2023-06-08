import Link from "next/link";
import Provider from "./Provider";
import Header from "./Header";
import { Container, Box, Text } from "./common/components";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <Provider>

          <Header />

          <Container
            as="main"
            maxW="container.lg"
            my="4"
            minH="calc(100vh - 115px - 2rem)"
          >
            {children}
          </Container>
          
          <Box bg="gray.50" color="gray.700" as="footer">
            <Container maxW="5xl" py={4}>
              <Text as="small">© 2023 azukiazusa</Text>
            </Container>
          </Box>

        </Provider>
      </body>
    </html>
  );
}