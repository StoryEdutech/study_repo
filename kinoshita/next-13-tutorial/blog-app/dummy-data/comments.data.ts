import { Comment } from "@/app/types"

export default [
    {
        id: 1111,
        body: "コメント１",
        articleId: 1,
        createdAt: "2022-09-08 05:55:07",
        updatedAt: null,
        author: {
            "name": "",
            "avatarUrl": ""
        }
    },
    {
        id: 2222,
        body: "コメント2",
        articleId: 3,
        createdAt: "2019-09-08 05:55:07",
        updatedAt: null,
        author: {
            "name": "",
            "avatarUrl": ""
        }
    }
] as Comment[]
