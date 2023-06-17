import {
    Card,
    CardHeader,
    CardBody,
    Text,
    Heading,
} from "@/components/chakra-ui";
import { Article } from "@/app/types";
const ArticleContent = ({ article }: { article: Article }) => {
    return (
        <Card as="article">
            <CardHeader>
                <Heading as="h1">{article.title}</Heading>
            </CardHeader>
            <CardBody>
                <Text as="p" fontSize="md">
                    {article.content}
                </Text>
            </CardBody>
        </Card>
    );
}
export default ArticleContent;