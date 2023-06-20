import {
    Card,
    CardHeader,
    CardBody,
    Text,
    Heading,
} from "@/components/chakra-ui";
import { Article } from "@/app/types";
const ArticleContent = ({ article }: { article: Article }) => {
    const { title, content } = article
    return (
        <Card as="article">
            <CardHeader>
                <Heading as="h1">{title||"タイトルがありません"}</Heading>
            </CardHeader>
            <CardBody>
                <Text as="p" fontSize="md">
                    {content||"内容がありません"}
                </Text>
            </CardBody>
        </Card>
    );
}
export default ArticleContent;