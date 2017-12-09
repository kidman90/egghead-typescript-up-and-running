"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/timer");
require("rxjs/add/observable/interval");
Observable_1.Observable.interval(1000)
    .subscribe(x => console.log(x));
class App {
    constructor() {
        this.title = "Eggheads";
    }
    getUsers() {
        return [{ name: "John" }];
    }
}
console.log(_.isArray(new App().getUsers()));
