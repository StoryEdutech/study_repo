import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


// クラスデコレータのController()の引数がパスになる
// 引数無しでルート
@Controller()
export class AppController {
    // NestjsがAppServiceインスタンスを自動で注入？する
    // DI(dependency injection) 依存関係の注入
    constructor(private readonly appService: AppService) {}

    // メソッドデコレータのGet()でGetリクエストのときの処理になる
    // リクエストがくるとメソッドが自動で実行される
    // 引数はルートパスになる
    // {controller()のパス} / {Getのパス()} method: Get
    // メソッド名は自由
    @Get()
    getHello(): { msg: string} {
        // 実際の処理はserviceにさせる
        // controllerはリクエストをハンドリングするだけ
        return this.appService.getHello();
    }
}

/**
 * デコレータを使うには、tsconfig.jsonで
 *  "experimentalDecorators": true
 * にする
 * 
 */