import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';

@Module({
    imports: [CatsModule],
    controllers: [AppController, CatsController],
    providers: [AppService],
})
export class AppModule {}

/**
 * @Module()
 * アプリケーションの構造を整理する為にNestが使うメタデータを提供する。
 * AppModuleはルートモジュール
 */

/**
 * imports
 * AppModuleでは作った各モジュールは元のAppModuleに
 * インポートして登録しないと、Nestjsが認識せず、使えない
 * 
 * controllers
 * 作った各controllerはappModlueのに全部登録しないとだめ
 * Nestが認識せず、インスタンスも作成されない
 * 
 * providers
 * 使うserviceを登録
 * 	Nestのインジェクタによってインスタンス化され、
 * 少なくともこのモジュールで共有される可能性のあるプロパイダ一覧
 * 
 * exports
 * CatsModuleをインポートしたモジュール(この場合AppModule)は
 * CatsServiceにアクセスでき、
 * CatServiceをインポートした他のすべてのモジュールと同じインスタンスを
 * 共有します。
 * serviceもmoduleもエクスポートできる
 * 
 * 
 */
