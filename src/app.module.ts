import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibrariesModule } from './libraries/libraries.module';
import { AdressesModule } from './adresses/adresses.module';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { StocksModule } from './stocks/stocks.module';
import { LoansModule } from './loans/loans.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    TypeOrmModule.forRoot(), 
    LibrariesModule, 
    AdressesModule, 
    UsersModule, 
    BooksModule, 
    StocksModule, 
    LoansModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
