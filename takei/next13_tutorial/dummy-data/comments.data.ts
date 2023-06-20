import { Comment } from "@/app/types"
const comments: Comment[] = [
  {
    "id": 1,
    "body": "1つ目のコメントです。",
    "articleId": 1,
    "createdAt": "2022-09-08 05:55:07",
    "updatedAt": "2022-09-08 05:55:07",
    "author": {
      "name": "user1",
      "avatarUrl": "https://i.pravatar.cc/300?img=1"
    }
  },
  {
    "id": 2,
    "body": "2つ目のコメントです。",
    "articleId": 1,
    "createdAt": "2022-09-08 05:55:07",
    "updatedAt": "2022-09-08 05:55:07",
    "author": {
      "name": "user2",
      "avatarUrl": "https://i.pravatar.cc/300?img=2"
    }
  },
  {
    "id": 3,
    "body": "3つ目のコメントです。",
    "articleId": 1,
    "createdAt": "2022-09-08 05:55:07",
    "updatedAt": "2022-09-08 05:55:07",
    "author": {
      "name": "user3",
      "avatarUrl": "https://i.pravatar.cc/300?img=3"
    }
  },
  {
    "id": 4,
    "body": "comment 4",
    "articleId": 3,
    "createdAt": "2022-09-08 05:55:07",
    "updatedAt": "2022-09-08 05:55:07",
    "author": {
      "name": "user4",
      "avatarUrl": "https://i.pravatar.cc/300?img=4"
    }
  }
];
export default comments;