import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

const samplePostData: Post[] = [
    {
        id: 1,
        body: 'お菓子食べたい',
        username: 'ken'
    },
    {
        id: 2,
        body: 'パン食べたい',
        username: 'mike'
    },
    {
        id: 3,
        body: 'カレー食べたい',
        username: 'steve'
    },
    {
        id: 4,
        body: 'アイス食べたい',
        username: 'bob'
    },
]

@Injectable()
export class PostsService {
    private readonly postData: Post[] = samplePostData

    create(createPostDto: CreatePostDto) {
        return 'This action adds a new post';
    }

    findAll(): Post[] {
        // データベースに接続まではやってないので、
        // とりあえず配列を返す
        return this.postData
    }

    findOne(id: number) {
        const existedPost = this.postData.filter((post: Post) => {
            return id === post.id
        })

        return existedPost
    }

    update(id: number, updatePostDto: UpdatePostDto) {
        return `This action updates a #${id} post`;
    }

    remove(id: number) {
        return `This action removes a #${id} post`;
    }
}
