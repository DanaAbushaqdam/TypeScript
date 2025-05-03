"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
class UserManager {
    constructor() {
        this.users = [];
        this.idCounter = 1;
    }
    addUser(userInput) {
        const EmailExist = this.users.some(user => user.email === userInput.email);
        if (EmailExist) {
            throw ('This Email already exists');
        }
        const newUser = Object.assign({ id: this.idCounter.toString() }, userInput);
        this.users.push(newUser);
        this.idCounter++;
        return newUser;
    }
    getUserById(id) {
        return this.users.find(user => id === user.id);
    }
    removeUser(id) {
        const IndexToRemove = this.users.findIndex(user => user.id === id);
        if (IndexToRemove != -1) {
            this.users.splice(IndexToRemove, 1);
            return true;
        }
        else {
            return false;
        }
    }
    updateUser(id, updates) {
        const NewUser = this.getUserById(id);
        if (!NewUser)
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
    getUserList() {
        return this.users.map(user => ({
            id: user.id,
            name: user.name,
            role: user.role
        }));
    }
}
exports.UserManager = UserManager;
