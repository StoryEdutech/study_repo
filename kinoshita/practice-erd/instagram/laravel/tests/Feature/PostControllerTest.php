<?php

namespace Tests\Feature;

use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PostControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /**
     * 投稿のデータと投稿に紐づく「コメント」「いいね」「タグ」を取得できている
     */
    public function test_get_post_data(): void
    {
        // データを作る
        $post = Post::factory()
            ->hasComments()
            ->hasLikes()
            ->hasTags()
            ->create();
            
        // getリクエスト
        $response = $this->get('/api/post/'.$post->id);
        
        // データが期待通り
        $response->assertJsonStructure([
            "id",
            "author" => [
                "name",
                "signup_date",
                "post_count"
            ],
            "content",
            "comments" => [
                "*" => [
                    "id",
                    "user_id",
                    "content",
                    "commentable_type",
                    "commentable_id",
                    "created_at",
                    "updated_at",
                    "deleted_at",
                    "likes",
                ]
            ],
            "tags" => [
                0
            ],
            "likes" => [
                0
            ]
        ]);
    }

    /**
     * 投稿の内容を編集できる, 編集後のデータを返す
     */
    public function test_can_edit_post_content (): void
    {
        // データを作る
        $post = Post::factory()
            ->state([
                'content' => 'initial content',
            ])
            ->hasComments()
            ->hasLikes()
            ->hasTags()
            ->create();
                
        // putリクエスト
        $response = $this->putJson('/api/post/'.$post->id, [
            'content' => 'updated content'
        ]);

        // 変更後のデータを返す
        $response->assertJson([
            'content' => 'updated content'
        ]);    

        // データが書き変わっていることを確認する
        $this->assertDatabaseMissing('posts', [
            'id' => $post->id,
            'content' => 'initial content',
        ]);
        $this->assertDatabaseHas('posts', [
            'id' => $post->id,
            'content' => 'updated content',
        ]);
    }

    /**
     * 投稿の編集で、本文が文字数制限を超えていたら、バリデーションエラーにする
     */
    public function test_post_content_length_exceeds_limit_validation_failure (): void
    {
        // データを作る
        $post = Post::factory()
            ->hasComments()
            ->hasLikes()
            ->hasTags()
            ->create();

        // 2201 文字の文字列を生成する
        $invalid_content = str_repeat('a', 2201);
                
        // putリクエスト
        $response = $this->putJson('/api/post/'.$post->id, [
            'content' => $invalid_content
        ]);

        // バリデーションエラーが期待されるので、422ステータスコードをアサート
        $response->assertStatus(422);
    }

    /**
     * ソフトデリートできる
     */
    public function test_post_data_soft_delete (): void
    {
        // データを作る
        $post = Post::factory()
            ->hasComments()
            ->hasLikes()
            ->hasTags()
            ->create();

        // ソフトデリートされていないことを確認する
        $this->assertNotSoftDeleted($post);
        
        // deleteリクエスト
        $this->delete('/api/post/'.$post->id);

        // ソフトデリートされていることを確認する
        $this->assertSoftDeleted($post);
    }
}
