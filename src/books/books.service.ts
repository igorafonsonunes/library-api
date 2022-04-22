import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private repository: Repository<Book>
  ){}

  create(createBookDto: CreateBookDto): Promise<Book> {
    return this.repository.save(createBookDto)
  }

  findAll(): Promise<Book[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Book> {
    return this.repository.findOne(id);
  }

  update(id: number, updateBookDto: UpdateBookDto): Promise<UpdateResult> {
    return this.repository.update(id, updateBookDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
