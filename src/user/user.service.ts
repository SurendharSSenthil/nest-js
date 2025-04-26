import { Injectable, NotFoundException } from '@nestjs/common';
import { user } from './dto/findDto';
import { createUser } from './dto/createDto';
import { updateUser } from './dto/updateDto';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Peter Jones',
      email: 'peter.jones@example.com',
      role: 'MANAGER',
    },
  ]

  findAll(role?: 'INTERN' | 'ENGINEER' | 'MANAGER'): user[]{
    if(role){
      const res = this.users.filter(user => user.role === role);
      if(res.length === 0) throw new NotFoundException(`User with role ${role} not found`);
      return res
    }
    return this.users;
  }

  findOne(id: number): user | undefined {
    const res =  this.users.find(user => user.id === id);
    if(!res) throw new NotFoundException(`User with id ${id} not found`);
    return res; 
  }

  create(user: createUser): user{
    const newUser = {
      id: this.users.length + 1,
      ...user,
    }
    this.users.push(newUser);
    return newUser;
  }

  update(updatedUser: updateUser, id: number): user | undefined {
    this.users = this.users.map((user) => {
      if(user.id === id) {
        return {
          ...user,
          ...updatedUser,
        }
      }
      return user})
      return this.findOne(id);
      }

      delete(id: number): user | undefined{
        const removedUser = this.findOne(id);
        this.users = this.users.filter((user) => user.id != id);
        return removedUser
      }
}
