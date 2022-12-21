<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Book::create([
            'title' => 'コンビニ人間',
            'author' => '主人公"古倉恵子"は、三十代半ばであるにも関わらず、正規の就職をせずに大学時代に始めたコンビニのアルバイトを続けていた。 古倉は子供の頃から変わり者で人間関係は希薄、恋愛経験も皆無だったが、「コンビニで出会う人間の真似」をしたり、妹の助言を聞くことで、大学生になってようやく普通の人間らしく振る舞う方法を身につけた。',
            'price' => '1500',
        ]);
        Book::create([
            'title' => '人間失格',
            'author' => '「人間失格」は、太宰治が1948年6月の自殺直前に書き残した自伝的小説。 本当の自分を誰にもさらけ出すことなく生きてきた主人公「葉造」の、幼少期から青年期までの道化と転落を描いた、捨て身の自己告白文学と言われています。',
            'price' => '2000',
        ]);
        Book::create([
            'title' => 'バカの壁',
            'author' => '「バカの壁」とは、人間ひとりひとりが何かを理解しようとする時にぶつかる限界を指します。 「話せばわかる」と信じてコミュニケーションを取り続けても上手くいかない場合、この「バカの壁」を誰しも持っているということを念頭に置くと、楽になれるかもしれません。',
            'price' => '2300',
        ]);
        // Book::create([
        //     'title' => '',
        //     'author' => '',
        //     'price' => '',
        // ]);
    }
}
