import {User} from '../models/User'

export type UserInput = Omit<User, 'id'>