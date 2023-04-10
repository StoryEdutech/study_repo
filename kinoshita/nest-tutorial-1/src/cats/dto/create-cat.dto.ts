/**
 * dto (data transfer object)
 * request payload (= body)の型定義
 * 
 * interfaceでもclassでも定義できるけど、
 * tsファイルをjsファイルにトランスパイルしたら
 * interfaceは削除され、Nestが認識できなくなるので
 * classがよい (公式より)
 * 
 */

export class CreateCatDto {
    name: string;
    age: number;
    breed: string;
}