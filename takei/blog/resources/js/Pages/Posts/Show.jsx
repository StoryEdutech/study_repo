import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Head, useForm } from '@inertiajs/react';
import styled from "styled-components"
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';

import PrimaryButton from '@/Components/PrimaryButton';

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

export default function PostShowPage(props) {
    const blog = props.post;
    console.log('props',props);
    console.log('blog',blog);

    // const { data, setData, post, processing, errors } = useForm({
    //     title: "",
    //     content: "",
    // });
    // const { title, content } = post;
    // console.log(post);

    const title = "";
    const content = "";

    const { data, setData,patch, post } = useForm({
        comment: "",
    });

    const commentData = {
        comment: data.comment,
        post_id: blog.id
            };


    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("comments.store",commentData));
    };

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
                                投稿者：{blog?.user?.name||""}
                            </UserName>
                            <PostTitle>{blog?.title||""}</PostTitle>
                            <PostContent>
                                {blog?.content||""}
                            </PostContent>

                            <PostComments>
                                <div>
                                    <div className="text-xl mb-6">コメントを投稿する</div>
                                    <form onSubmit={submit}>
                                            <InputLabel forInput="comment" value="" />

                                            <textarea
                                                name="comment"
                                                value={data.comment||""}
                                                className="mt-1 block w-full"
                                                onChange={handleOnChange}
                                            >
                                            </textarea>
                                            <input
                                                type="hidden"
                                                name="post_id"
                                                value={blog.id}
                                            />
                                            <div className="flex items-center justify-end mt-4">
                                                <PrimaryButton
                                                    className="ml-4"
                                                >
                                                    作成
                                                </PrimaryButton>
                                            </div>
                                    </form>
                                </div>
                                <div>
                                    <div className="text-xl my-12 mb-6">あなたの投稿に対するコメント</div>
                                    <div>
                                        {blog?.comments?.length > 0 ?
                                            blog.comments.map((comment) =>
                                                <div className="mb-3">
                                                    <div>
                                                    {comment?.content || ""}
                                                    </div>
                                                    <div>投稿者：{blog?.user?.name}</div>

                                                </div>)
                                            :
                                            <div>コメントはまだありません</div>}
                                    </div>
                                </div>

                            </PostComments>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
