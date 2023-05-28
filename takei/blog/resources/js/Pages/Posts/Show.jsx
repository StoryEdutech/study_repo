import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Head } from '@inertiajs/react';
import styled from "styled-components"

const UserName = styled.div`
font-size: 1.4rem;
margin-bottom: 2rem;
`;
const PostTitle = styled.div`
font-size: 1.4rem;
`;
const PostContent = styled.div`
margin-top: 3rem;
`;
const PostComments = styled.div`
margin-top: 4rem;
`;

export default function Show(props) {
    const { post } = props;
    const { title, content } = post;
    console.log(post);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    詳細ページ
                </h2>
            }
        >
            <Head title="post Edit" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200 m-28">
                            <UserName>
                                投稿者：{post?.user?.name || ""}
                            </UserName>
                            <PostTitle>{title}</PostTitle>
                            <PostContent>
                                {content}
                            </PostContent>

                            <PostComments>
                                <div className="text-xl mb-6">あなたの投稿に対するコメント</div>
                                <div>
                                    {post?.comments?.length > 0 ?
                                        post.comments.map((comment) =>
                                            <div>
                                                {comment?.content || ""}
                                            </div>)
                                        :
                                        <div>コメントはまだありません</div>}
                                </div>
                            </PostComments>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
