import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { Loan } from './entities/loan.entity';

@Injectable()
export class LoansService {

  constructor(
    @InjectRepository(Loan)
    private repository: Repository<Loan>
  ){}

  create(createLoanDto: CreateLoanDto): Promise<Loan> {
    return this.repository.save(createLoanDto);
  }

  findAll(): Promise<Loan[]> {
    return this.repository.find()
  }

  findOne(id: number): Promise<Loan> {
    return this.repository.findOne();
  }

  update(id: number, updateLoanDto: UpdateLoanDto): Promise<UpdateResult> {
    return this.repository.update(id, updateLoanDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
