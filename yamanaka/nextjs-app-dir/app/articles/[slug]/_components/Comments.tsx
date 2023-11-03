import {
  Card,
  CardBody,
  StackDivider,
  VStack,
  Text,
  Box,
  Avatar,
  Flex,
} from "@/app/_common/components";
import { Comment } from "@/app/_common/types";
import getComments from "@/app/_lib/api/getComments";

export default async function Comments({ slug }: { slug: string }) {
  const comments = await getComments(slug);

  if (comments.length === 0) {
    return (
      <>
        <Text as="p" fontSize="md">
          コメントはありません。
        </Text>
      </>
    );
  } else {
    return (
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        as="ul"
        align="stretch"
        px={4}
      >
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </VStack>
    );
  }
}

function CommentItem({ comment }: { comment: Comment }) {
  return (
    <Flex as="li" listStyleType="none" align="center">
      <Avatar
        size="sm"
        name={comment.author.name}
        src={comment.author.avatarUrl}
        mr={4}
      />
      <Text fontSize="sm">{comment.body}</Text>
    </Flex>
  );
}
