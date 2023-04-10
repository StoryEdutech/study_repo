import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World! Nestjs';
    }
}

/**
 * コントローラーはHTTPリクエストを処理し、なかの複雑な処理を
 * プロバイダに委任することができる（＝サービスに書く）
 * 
 * moduleのprovidersに依存関係として注入できる
 * つまり、オブジェクトが相互にさまざまな関係を作成できることを意味し、
 * オブジェクトのインスタンスを「結び付ける」機能の大部分を 
 * Nest ランタイム システムに委任できます。
 * 
 */