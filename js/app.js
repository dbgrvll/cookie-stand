
//1. create an object with at least 3 key/value pairs
//
//2. create an array as one of your values
//3. add 2 properties by direct assignment
//4.create a method

'use strict';

//

var store1 = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  seattleRandom: function(min, max){
    min = Math.ceil(this.min);
    max = Math.floor(this.max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

  }
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

console.log(store1.seattleRandom());

var store2 = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 12,
  tokyoRandom: function(min, max){
    min = Math.ceil(this.min);
    max = Math.floor(this.max);
    return Math.floor(Math.random() * (max - min +1)) + min;

  }
};

console.log(store2.tokyoRandom());

var store3 = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  dubaiRandom: function(min, max){
    min = Math.ceil(this.min);
    max = Math.ceil(this.max);
    return Math.floor(Math.random() * (max - min +1)) + min;

  }

};

console.log(store3.dubaiRandom());

var store4 = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  parisRandom: function(min, max){
    min = Math.ceil(this.min);
    max = Math.ceil(this.max);
    return Math.floor(Math.random() * (max - min +1)) + min;

  }

};

console.log(store4.parisRandom());

var store5 = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  limaRandom: function(min, max){
    min = Math.ceil(this.min);
    max = Math.ceil(this.max);
    return Math.floor(Math.random() * (max - min +1)) +min;
  }

};

console.log(store5.limaRandom());

//   var person2 = {
//     name: 'Grace Hopper',
//     age: 85,
//     computerScientist: ['Vassar College', 'Yale University'],
//     walk: function() {
//       console.log( this.name + ' is walking' );
//       //the below log uses a template literal
//       console.log( `${this.name} is walking` );
//     }
//   }

//   person2.serviceBranch = 'United States Navy'
// console.log(person2);



// person2.walk()
// console.log('person1["name"]: ', person1['name']);
// person1.walk();
// person2.walk();

//   var car = {
//     wheels: 4,
//     doors: 2,
//     trunk: false,
//     drive: function() {
//       console.log('Vrroooommm!!!!');
//     }
//   }
// console.log(person1.favoriteMovies[2]);
// console.log('person1.name: ', person1.name);
// console.log('person1.isStudent: ', person1.isStudent);
