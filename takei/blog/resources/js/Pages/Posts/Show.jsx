import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { Head } from '@inertiajs/react';

export default function Show(props) {
    const {post} = props;
    const {title, content} = post;
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
                        <div className="p-6 bg-white border-b border-gray-200">
                            {/* <ValidationErrors errors={errors} /> */}
                            <div className="m-28">
                                <div className="text-xl mb-6">タイトル</div>
                                <div>
                                    {title}
                                </div>
                            </div>
                            <div className="m-28">
                                <div className="text-xl mb-6">内容</div>
                                <div>
                                    {content}
                                </div>
                            </div>

                            <div className="flex items-center justify-end mt-4">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
