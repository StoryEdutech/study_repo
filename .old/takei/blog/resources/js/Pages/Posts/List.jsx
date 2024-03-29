import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Head, Link, useForm } from '@inertiajs/react';
import styled from "styled-components"

const Button = styled.button`
  display: inline-block;
  color: #333;
  border: 2px solid #333;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  display: block;
`;

const RegistButton = styled(Button)`
  background: #FBF4D6;
  border-width: 1px;
`;
const DetailButton = styled(Button)`
  background: #FBF4D6;
  border-width: 1px;
`;
const DeleteButton = styled(Button)`
  color: #DB5461;
  border-color: #DB5461;
`;
const UpdateButton = styled(Button)`
  color: #6CC68C;
  border-color: #6CC68C;
`;


export default function List(props) {
    console.log('props', props);
    const { delete: destory } = useForm();
    const handleDelete = (id) => {
        destory(route("posts.destroy", id), {
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    ブログ
                </h2>
            }
        >
            <Head title="Blog Index" />

            <div className="p-6 bg-white border-b border-gray-200">
                <div className="bg-white w-2/4 mx-auto">
                    <div>
                        <Link href={route("posts.create")}>
                            <RegistButton>新規作成</RegistButton>
                        </Link>
                    </div>
                    <table className="mx-auto">
                        <thead>
                            <tr>
                                <th>投稿者</th>
                                <th>タイトル</th>
                                <th>詳細</th>
                                <th>更新</th>
                                <th>削除</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.posts.map((post) =>
                                post?.user?.name &&
                                <tr key={post.id}>
                                    <td className="border px-4 py-2">
                                        {post?.user?.name}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {post?.title}
                                    </td>
                                    <td className="border px-4 py-2">
                                        <Link
                                            href={route(
                                                "posts.show",
                                                post.id
                                            )}
                                        >
                                            <DetailButton>
                                                詳細
                                            </DetailButton>
                                        </Link>
                                    </td>

                                    <td className="border px-4 py-2">
                                        {props.auth.user?.id === post.user?.id &&
                                            <Link
                                                href={route(
                                                    "posts.edit",
                                                    post.id
                                                )}
                                            >
                                                <UpdateButton>
                                                    更新
                                                </UpdateButton>
                                            </Link>
                                        }
                                    </td>
                                    <td className="border px-4 py-2">
                                        {props.auth.user?.id === post.user?.id &&
                                            <DeleteButton
                                                onClick={() =>
                                                    handleDelete(
                                                        post.id
                                                    )
                                                }>
                                                削除
                                            </DeleteButton>
                                        }
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
