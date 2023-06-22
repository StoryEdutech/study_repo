import {
  StackDivider,
  VStack,
  Text,
  Avatar,
  Flex,
} from "@/components/chakra-ui";

import { Comment } from "@/app/types";

export default async function Comments({
  commentPromise,
}: {
  commentPromise: Promise<Comment[]>;
}) {
  const comments:Comment[] = await commentPromise;

  return (
    comments && Array.isArray(comments) && comments.length > 0 ?
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
      :
      <Text as="p" fontSize="md">
        コメントはまだありません。
      </Text>
  );
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
  )
}