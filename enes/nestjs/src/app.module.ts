import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import getConnectionConfig  from './db/getConfig';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Cat} from "./cats/cat.entity"
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ...getConnectionConfig("sqlite"),
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      autoLoadEntities: true,
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
