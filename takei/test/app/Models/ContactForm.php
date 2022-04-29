<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactForm extends Model
{
    protected $fillable = [
        'your_name',
        'title',
        'email',
        'url',
        'gender',
        'age',
        'contact'
    ];

    public function findAllContact()
    {
        return $this->all();
    }

    public function insertContact(array $attributes) {
        // return $this->create($attributes);
        return $this->create([
            'your_name' => $attributes['your_name'],
            'title' => $attributes['title'],
            'email' => $attributes['email'],
            'url' => $attributes['url'],
            'gender' => $attributes['gender'],
            'age' => $attributes['age'],
            'contact' => $attributes['contact']
        ]);
    }


    public function updateContact(array $attributes) {
        // return $this->update($attributes);
        return $this->update([
            'your_name' => $attributes['your_name'],
            'title' => $attributes['title'],
            'email' => $attributes['email'],
            'url' => $attributes['url'],
            'gender' => $attributes['gender'],
            'age' => $attributes['age'],
            'contact' => $attributes['contact']
        ]);
    }
}
