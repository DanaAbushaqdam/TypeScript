import {User} from '../models/User';
import {UserInput} from '../types/UserInput';
import {UserUpdate} from '../types/UserUpdate';

export interface IUserManager{
    addUser(userInput: UserInput): User,
    getUserById(id: string): User | undefined,
    removeUser(id: string): boolean,
    updateUser(id: string, updates: UserUpdate): boolean,
    getUserList(): Pick<User, 'id' | 'name' | 'role'>[]
}