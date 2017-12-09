"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
require("rxjs/add/observable/timer");
require("rxjs/add/observable/interval");
// Observable.interval(1000)
//   .subscribe(x => console.log(x));
class App {
    constructor() {
        this.title = "Eggheads";
    }
    getUsers() {
        return [{ name: "John" }];
    }
}
console.log(_.isArray(new App().getUsers()));
// const person = { name: "John" };
// function addAge(age: number) {
//   return function (person: any) {
//     return {
//       age,
//       name: person.name
//     };
//   };
// }
// const newPerson = addAge(30)(person);
// console.log(newPerson);
function addAge(age) {
    return function (targetClass) {
        return class {
            constructor() {
                this.name = new targetClass().name;
                this.age = age;
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = "John";
    }
};
Person = __decorate([
    addAge(20)
], Person);
console.log(new Person());
