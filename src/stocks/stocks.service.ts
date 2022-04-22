import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';

@Injectable()
export class StocksService {

  constructor(
    @InjectRepository(Stock)
    private repository: Repository<Stock>
  ){}

  create(createStockDto: CreateStockDto): Promise<Stock> {
    return this.repository.save(createStockDto);
  }

  findAll(): Promise<Stock[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Stock> {
    return this.repository.findOne(id);
  }

  update(id: number, updateStockDto: UpdateStockDto): Promise<UpdateResult> {
    return this.repository.update(id, updateStockDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id)
  }
}
