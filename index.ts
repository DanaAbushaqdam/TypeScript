import { UserManager } from './classes/UserManager';
import { Role } from './models/Role';


const manager = new UserManager();
const FirstUser = manager.addUser({
    name: "Dana Abushakhdam",
    email: "dana.Abushaqdam106@gmail.com",
    age: 24,
    role: Role.user,
    address: {
    street: "Fateh Street",
    city: "Nablus",
    zip: "12345"
    }
});

console.log(manager.getUserById(FirstUser.id));
console.log(manager.getUserList());
