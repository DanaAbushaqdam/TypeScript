"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserManager_1 = require("./classes/UserManager");
const Role_1 = require("./models/Role");
const manager = new UserManager_1.UserManager();
const FirstUser = manager.addUser({
    name: "Dana Abushakhdam",
    email: "dana.Abushaqdam106@gmail.com",
    age: 24,
    role: Role_1.Role.user,
    address: {
        street: "Fateh Street",
        city: "Nablus",
        zip: "12345"
    }
});
console.log(manager.getUserById(FirstUser.id));
console.log(manager.getUserList());
