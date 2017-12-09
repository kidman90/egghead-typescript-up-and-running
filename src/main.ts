import { SocialNetwork } from './social-network';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/interval';

// Observable.interval(1000)
//   .subscribe(x => console.log(x));

class App implements SocialNetwork {
  title = "Eggheads";

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

function addAge(age:number) {
  return function (targetClass:any) {
    return class {
      name = new targetClass().name;
      age = age;
    };
  };
}

@addAge(20)
class Person {
  name = "John";
}

console.log(new Person());
