import { Heading, Button } from "@/app/_common/components";
import NextLink from "next/link";

export const metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div>
      <Heading mb={4}>お探しの記事が見つかりませんでした。</Heading>
      <Button as={NextLink} href="/">
        トップへ戻る
      </Button>
    </div>
  );
}
