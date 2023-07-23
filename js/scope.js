// filter function on the String object

console.log("**FILTER FUNCTION ON THE STRING OBJECT**")

String.prototype.filter = function (bannedWord) {
  const inputStrArr = this.split(' ');
  return inputStrArr.filter((s) => s != bannedWord).join(' ');
};

console.log('This house is not nice!'.filter('not'));

//BubbleSort algorithm on the Array object

console.log("**BUBBLE SORT ON THE ARRAY OBJECT**")

Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1; j++) {
      if (this[j] > this[j + 1]) {
        //swap
        const temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this;
};

console.log([6, 4, 0, 3, -2, 1].bubbleSort());

//Inheritance Teacher -> Person

console.log("**FUNCTION CONSTRUCTOR - TEACHER->PERSON**")


// Using Function Constructor
function Person(name) {
  this.name = name;
}

function Teacher(name) {
  Person.call(this, name);
}

//prints out: [teacher's name] is now teaching [subject].
Teacher.prototype.teach = function (subject) {
  console.log(`Prototype: ${this.name} is now teaching ${subject}`);
};

const teacher1 = new Teacher('Sami Taha');
teacher1.teach('WAP');

//Using Object.create and factory function

console.log("**FACTORY FUNCTION - TEACHER->PERSON**")


function createPerson(name) {
  return {
    name,
  };
}

function createTeacher(name) {
  const teacher = Object.create(createPerson(name));
  teacher.teach = function (subject) {
    console.log(`Factory Function: ${name} is now teaching ${subject}`);
  };
  return teacher;
}

const teacher2 = createTeacher('Payman');
teacher2.teach('EA');

// Person, Student, Professor
// Object Prototype Approach
console.log("**OBJECT PROTOTYPE - PERSON,STUDENT,PROFESSOR**")

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greeting = function () {
  console.log(
    `Greetings, my name is ${this.name} and I am ${this.age} years old`
  );
};

Person.prototype.salute = function () {
  console.log(
    `Good morning!, and in case I dont see you, good afternoon, good evening and good night!`
  );
};

function Student(name, age, major) {
  Person.call(this, name, age);
  this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.greeting = function () {
  console.log(`Hey, my name is ${this.name} and I am studying ${this.major}`);
};

function Professor(name, age, department) {
  Person.call(this, name, age);
  this.department = department;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.greeting = function () {
  console.log(
    `Good day, my name is ${this.name} and I am in the ${this.department} department`
  );
};

const professor = new Professor('Sami Taha', 42, 'CS');
const student = new Student('Dipesh', 26, 'IT');

professor.salute();
professor.greeting();

student.salute();
student.greeting();

//Function Constructor Approach:
console.log("**FUNCTION CONSTRUCTOR - PERSON,STUDENT,PROFESSOR**")


function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greeting = function () {
    console.log(
      `Greetings, my name is ${this.name} and I am ${this.age} years old`
    );
  };

  this.salute = function () {
    console.log(
      `Good morning!, and in case I dont see you, good afternoon, good evening and good night!`
    );
  };
}

function Student(name, age, major) {
  Person.call(this, name, age);
  this.major = major;
  this.greeting = function () {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}`);
  };
}

function Professor(name, age, department) {
  Person.call(this, name, age);
  this.department = department;
  this.greeting = function () {
    console.log(
      `Good day, my name is ${this.name} and I am in the ${this.department} department`
    );
  };
}

const professor2 = new Professor('Sami Taha', 42, 'CS');
const student2 = new Student('Dipesh', 26, 'IT');

professor2.salute();
professor2.greeting();

student2.salute();
student2.greeting();
