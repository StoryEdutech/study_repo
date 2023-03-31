import { Injectable } from '@nestjs/common';
// import { Cat } from './interfaces/cat.interface';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>,
  ){}
  create(cat: Cat) {
    this.catRepository.save(cat);
  }

  findAll(): Promise<Cat[]> {
     return this.catRepository.find();
   }
  findOne(id: number): Promise<Cat | null> {
   return this.catRepository.findOneBy({ id });
 }

 }
