<?php

namespace App\Services;

class SearchQuery {
    public static function processQuery($search, $query) {
        if($search !== null){
            // 全角スペースを半角に
            $search_split = mb_convert_kana($search, 's');

            //空白で区切る
            $search_split2 = preg_split('/[\s]+/', $search_split);

            //単語をループで回す
            foreach($search_split2 as $value) {
                $query->where('your_name', 'like', '%'.$value.'%');
            }
        }
        return $query;
    }
}

