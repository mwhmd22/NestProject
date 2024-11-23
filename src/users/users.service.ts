import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './schemas/users.schema';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async findById(id: number) {
    return await this.userRepository.findById(id);
  }

  async createUser(createUserDto: CreateUserDto) {
    console.log('in the service', createUserDto);
    return await this.userRepository.createUser(createUserDto);
  }

  async updateUser(updateUserDto: UpdateUserDto, id: any): Promise<User> {
    return await this.userRepository.updateUser(updateUserDto, id);
  }

  async delete(id: number) {
    return await this.userRepository.delete(id);
  }
}
