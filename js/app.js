
//1. create an object with at least 3 key/value pairs
//2. create an array as one of your values
//3. add 2 properties by direct assignment
//4.create a method

"use strict";

var person1 = {
    name: 'Thomas',
    isStudent: true,
    favoriteMovies: ['the princess bride', 'monte python and the holy grail', 'the bourne identity'],
    run: function() {
      console.log( this.name + ' is running.' );
    },
    walk: function() {
      console.log( this.name + ' is walking');
    }
  }
  
  var person2 = {
    name: 'Grace Hopper',
    age: 85,
    computerScientist: ['Vassar College', 'Yale University'],
    walk: function() {
      console.log( this.name + ' is walking' );
      //the below log uses a template literal
      console.log( `${this.name} is walking` );
    }
  }
  
  person2.serviceBranch = 'United States Navy'
  // console.log(person2);
  
  
  
  // person2.walk()
  // console.log('person1["name"]: ', person1['name']); 
  // person1.walk();
  // person2.walk();
  
  var car = {
    wheels: 4,
    doors: 2,
    trunk: false,
    drive: function() {
      console.log('Vrroooommm!!!!');
    }
  }
  // console.log(person1.favoriteMovies[2]);
  // console.log('person1.name: ', person1.name);
  // console.log('person1.isStudent: ', person1.isStudent);