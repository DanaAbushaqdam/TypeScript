import {Role} from '../enums/Role';
import {Address} from './Address';

export interface User{
    id: string,
    name: string,
    email: string,
    age: number,
    role: Role,
    address?: Address
}