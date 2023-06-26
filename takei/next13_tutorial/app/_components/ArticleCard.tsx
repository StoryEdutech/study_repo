import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@/components/chakra-ui";;
import NextLink from "next/link";
import { Article } from "@/app/types";

export default function ArticleCard({ article }: { article: Article }) {
  const {createdAt,slug,title,content} =  article;
  const formattedDate = new Date(createdAt).toLocaleDateString(
    "ja-JP",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  return (
    <Card
      as={"li"}
      _hover={{
        boxShadow: "xl",
      }}
      minW="100%"
    >
      <NextLink href={`/articles/${slug}`}>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{content.substring(0, 200)}...</Text>
        </CardBody>
        <CardFooter>
          <Text fontSize="sm" color="gray.600">
            {formattedDate}
          </Text>
        </CardFooter>
      </NextLink>
    </Card>
  );
}