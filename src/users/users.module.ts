import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import UsersSchema from './schemas/users.schema';
import { UserRepository } from './users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UsersSchema])],
  providers: [UsersService, UserRepository],
  controllers: [UsersController],
})
export class UsersModule {}
