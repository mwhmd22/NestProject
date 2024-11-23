import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class UsersSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ length: 25, nullable: true })
  name: string;

  @Column({ length: 25, nullable: true })
  surname: string;

  @Column({ nullable: true })
  age: number;

  @Column({ select: false, nullable: false })
  password: string;
}
