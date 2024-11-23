import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UsersSchema from './schemas/users.schema';
import { Repository } from 'typeorm';
import User from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UsersSchema)
    private user_repository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.user_repository.create(createUserDto);
    return this.user_repository.save(user);
  }

  async findAll() {
    return await this.user_repository.find();
  }

  async findById(id: any): Promise<User[]> {
    return await this.user_repository.findBy({ id });
  }

  async updateUser(id: any, updateUserDto: UpdateUserDto): Promise<User> {
    await this.user_repository.update(id, updateUserDto);
    return this.user_repository.findOneBy({ id });
  }

  async delete(id: any): Promise<any> {
    return await this.user_repository.delete({ id });
  }
}
