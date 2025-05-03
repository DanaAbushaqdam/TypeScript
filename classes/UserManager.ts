import {User} from '../interfaces/User';
import {UserInput} from '../types/UserTypes';
import {UserUpdate} from '../types/UserTypes';
import {IUserManager} from '../interfaces/IUserManager';

export class UserManager implements IUserManager{
    private users:User[] = [];
    private idCounter : number = 1
    addUser(userInput: UserInput): User {
        const EmailExist = this.users.some(user => user.email === userInput.email);
        if(EmailExist){
            throw('This Email already exists')
        }
        const newUser: User = {
            id: this.idCounter.toString(),
            ...userInput
        };
        
        this.users.push(newUser);
        this.idCounter++;
        
        return newUser;
    }
    getUserById(id: string): User | undefined {
        return this.users.find(user=> id === user.id)
    }
    removeUser(id: string): boolean {
        const IndexToRemove =this.users.findIndex(user => user.id === id);
        if(IndexToRemove!= -1){
            this.users.splice(IndexToRemove,1);
            return true;
        }
        else{
            return false;
        }
    }
    updateUser(id: string, updates: UserUpdate): boolean {
        const NewUser = this.getUserById(id);
        if(!NewUser) 
            return false;
        if (updates.email && updates.email !== NewUser.email) {
            const emailExists = this.users.some(u => u.email === updates.email);
            if (emailExists) {
                throw new Error("This Email already exists");
            }
    } 
        Object.assign(NewUser, updates);
        return true;

    }
    getUserList(): Pick<User, "id" | "name" | "role">[] {
        return this.users.map(user =>({
            id: user.id,
            name: user.name,
            role: user.role
        }))
    }
    }