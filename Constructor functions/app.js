"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calAge = function () {
  console.log(2037 - this.birthYear);
};

const duong = new Person("Duong", 2001);
duong.calAge();

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calAge();

Student.prototype.constructor = Student;
