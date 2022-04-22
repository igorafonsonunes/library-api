import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateEvent, UpdateResult } from 'typeorm';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import { Library } from './entities/library.entity';

@Injectable()
export class LibrariesService {
  constructor(
    @InjectRepository(Library)
    private repository: Repository<Library>
  ){}

  create(createLibraryDto: CreateLibraryDto): Promise<Library> {
    return this.repository.save(createLibraryDto);
  }

  findAll(): Promise<Library[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Library> {
    return this.repository.findOne(id);
  }

  update(id: number, updateLibraryDto: UpdateLibraryDto): Promise<UpdateResult> {
    return this.repository.update(id, updateLibraryDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
