import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();


/**
 * ■Platform agnosticism
 * Nestjsが異なるプラットフォームで実行できるということ(=プラットフォームに依存しない)
 * 例えば、NestJSを使用してWebアプリケーションを構築する場合、
 * NestJSは異なるWebフレームワーク（Express、Fastifyなど）上で実行できます
 * デフォルトではExpressになっている
 * package.jsonのdependenciesの
 * @nestjs/platform-expressが裏では実行される
 */