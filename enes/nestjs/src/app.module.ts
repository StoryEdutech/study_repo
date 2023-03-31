import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import getConfig  from './db/getConfig';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Cat} from "./cats/cat.entity"
import { CatsModule } from './cats/cats.module';


@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(getConfig({connection:"sqlite",entities:[Cat]}))
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
