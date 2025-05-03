import { User } from "../models/User";

export type UserUpdate = Partial<Omit<User, 'id'>>
