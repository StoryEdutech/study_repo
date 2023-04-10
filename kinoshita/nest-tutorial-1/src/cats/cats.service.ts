import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = []

    create(cat: Cat): void{
        this.cats.push(cat)
    }

    findAll(): Cat[] {
        return this.cats
    }
}

/**
 * 
 * @Injectable()。デコレーターは、Nest IoCコンテナーで管理でき
 * るクラスである@Injectable()ことを宣言するメタデータを添付します。
 * 
 */

/**
 * Nest IoCコンテナー（Inversion of Control Container）は、
 * Nestアプリケーション内の依存関係の注入を管理する機能を提供する、
 * Nestの主要な機能の一つです。IoCは、コード内でオブジェクトの作成や
 * 依存関係の解決を行うことを意味し、
 * 依存性の注入（Dependency Injection, DI）パターンの実装により、
 * Nest IoCコンテナーはアプリケーションの柔軟性、再利用性、
 * テスト可能性を向上させます。
 * Nest IoCコンテナーは、@Injectable()デコレーターによって宣言された
 * クラスを管理し、必要に応じてインスタンス化し、他のクラスに注入します。
 * これにより、アプリケーション内の異なる部分の間で情報を共有し、
 * 依存関係を解決することができます。
 * IoCコンテナーは、依存性の解決に関する複雑さを取り除き、
 * アプリケーションのスケーラビリティを向上させます。
 */