import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import getConnectionConfig  from './db/getConfig';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Cat} from "./cats/cat.entity"
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { join } from 'path';

@Module({
  imports: [
    CatsModule,
    UsersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ...getConnectionConfig("sqlite"),
      entities: [join(__dirname, '**', '*.entity.{ts,js}')]
      // autoLoadEntities: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
