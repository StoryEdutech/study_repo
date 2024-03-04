<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BookRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required',
            'author' => 'required'
        ];
    }

    public function attributes()
    {
        return [
            'title' => 'タイトル',
            'author' => '著者'
        ];

    }

    public function messages()
    {
        return [
            'title.required' => 'タイトルは必須項目です。',
            'author.required' => '著者は必須項目です。',
        ];
    }
}
