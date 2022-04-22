import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdressDto } from './dto/create-adress.dto';
import { UpdateAdressDto } from './dto/update-adress.dto';
import { Adress } from './entities/adress.entity';

@Injectable()
export class AdressesService {

  constructor(
      @InjectRepository(Adress)
      private repository: Repository<Adress>
    ){}

  create(createAdressDto: CreateAdressDto) {
    return this.repository.save(createAdressDto);
  }

  findAll(): Promise<Adress[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Adress> {
    return this.repository.findOne(id);
  }

  update(id: number, updateAdressDto: UpdateAdressDto) {
    return this.repository.update(id, updateAdressDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
