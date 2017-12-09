"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
require("rxjs/add/observable/timer");
require("rxjs/add/observable/interval");
require("reflect-metadata");
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
// function addAge(age:number) {
//   return function (targetClass:any) {
//     return class {
//       name = new targetClass().name;
//       age = age;
//     };
//   };
// }
// @addAge(20)
// class Person {
//   name = "John";
// }
// console.log(new Person());
function example() {
    return function (targetClass) {
        const types = Reflect.getMetadata('design:paramtypes', targetClass);
        console.log(types);
        return targetClass;
    };
}
let Person = class Person {
    constructor(name, age) { }
};
Person = __decorate([
    example(),
    __metadata("design:paramtypes", [String, Number])
], Person);
let Cat = class Cat {
    constructor(lazy, hair) { }
};
Cat = __decorate([
    example(),
    __metadata("design:paramtypes", [Boolean, Object])
], Cat);
new Person("John", 10);
