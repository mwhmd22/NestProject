import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { UsersService } from 'src/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import UsersSchema from 'src/users/schemas/users.schema';
import { UserRepository } from 'src/users/users.repository';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, UsersService, UserRepository],
  imports: [TypeOrmModule.forFeature([UsersSchema])],
})
export class ProductsModule {}
