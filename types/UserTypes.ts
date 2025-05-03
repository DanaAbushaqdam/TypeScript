import {User} from '../interfaces/User'

export type UserInput = Omit<User, 'id'>
export type UserUpdate = Partial<Omit<User, 'id'>>
