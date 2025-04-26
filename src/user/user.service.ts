import { Injectable } from '@nestjs/common';

type user = {
  id: number;
  name: string;
  email?: string;
  role?: string;
}

type createUser = {
  name: string;
  email: string;
  role: string;
}

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
      return this.users.filter(user => user.role === role);
    }
    return this.users;
  }

  findOne(id: number): user | undefined {
    return this.users.find(user => user.id === id);
  }

  create(user: createUser): user{
    const newUser = {
      id: this.users.length + 1,
      ...user,
    }
    this.users.push(newUser);
    return newUser;
  }

  update(updatedUser: {email?: string, role?: string}, id: number): user | undefined {
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
