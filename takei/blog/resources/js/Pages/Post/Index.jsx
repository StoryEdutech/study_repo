import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Head,Link } from '@inertiajs/react';
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
const DeleteButton = styled(Button)`
  color: #DB5461;
  border-color: #DB5461;
`;


export default function Index(props) {
    console.log('props', props);
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
                <div>
                    <Link href={route("post.create")}>
                        <RegistButton>新規作成</RegistButton>
                    </Link>
                </div>
                <table>
    <thead>
        <tr>
            <th>タイトル</th>
            <th>コンテンツ</th>
            <th>削除</th>
        </tr>
    </thead>
    <tbody>
        {props.posts.map((post) => {
            return (
                <tr key={post.id}>
                    <td className="border px-4 py-2">
                        {post.title}
                    </td>
                    <td className="border px-4 py-2">
                        {post.content}
                    </td>
                    <td className="border px-4 py-2">
                        <DeleteButton>削除</DeleteButton>
                    </td>
                </tr>
            );
        })}
    </tbody>
</table>
            </div>
        </AuthenticatedLayout>
    );
}
