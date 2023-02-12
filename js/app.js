// 'use strict';

// function Person(id, name, dep, level, img, salary) {
//     this.id = id;
//     this.name = name;
//     this.dep = dep;
//     this.level = level;
//     this.img = img;
//     this.salary = salary;
// }

// const juniorLevel = {
//     greet() {
//         if (this.level == 'Junior'){
//             this.salary = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
//         };
//         document.write(`The Employee with number ${this.id} is ${this.name}! He/She works in 
//         ${this.dep} and he/she is a ${this.level} level his/her salary is \n ${this.salary}`);
//     },
// };

// const midseniorLevel = {
//     greet() {
//         if (this.level == 'Mid-Senior'){
//             this.salary = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
//         };
//         document.write(`The Employee with number ${this.id} is ${this.name}! He/She works in 
//         ${this.dep} and he/she is a ${this.level} level his/her salary is \n ${this.salary}`);
//     },
// };

// const seniorLevel = {
//     greet() {
//         if (this.level == 'Senior'){
//             this.salary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
//         };
//         document.write(`The Employee with number ${this.id} is ${this.name}! He/She works in 
//         ${this.dep} and he/she is a ${this.level} level his/her salary is \n ${this.salary}`);
//     },
// };

// Object.assign(Person.prototype, juniorLevel, midseniorLevel, seniorLevel);

function Person(id, name, dep, level, img, salary = 0) {
    this.id = id;
    this.name = name;
    this.dep = dep;
    this.level = level;
    this.img = img;
    this.salary = salary;

    if (this.level === 'Junior') {
        this.salary = (Math.floor(Math.random() * (1000 - 500 + 1)) + 500) * ( 1 - 0.075);
    } else if (this.level === 'Mid-Senior') {
        this.salary = (Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000) * ( 1 - 0.075);
    } else if (this.level === 'Senior') {
        this.salary = (Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500) * ( 1 - 0.075);
    }
}

const level = {
    greet() {
        document.getElementById("root").innerHTML = `The Employee with number ${this.id} is ${this.name}! He/She works in 
        ${this.dep} and he/she is a ${this.level} level his/her salary is \n ${this.salary}.`;
    },
};

Object.assign(Person.prototype, level);

const ghazi = new Person(1000, 'Ghazi Samer', 'Administration', 'Senior', '',);
const lana = new Person(1001, 'Lana Ali', 'Finance', 'Senior', '',);
const tamara = new Person(1002, 'Tamara Ayoub', 'Maarketing', 'Senior', '',);
const safi = new Person(1003, 'Safi Walid', 'Administration', 'Mid-Senior', '',);
const omar = new Person(1004, 'Omar Zaid', 'Development', 'Senior', '',);
const rana = new Person(1005, 'Rana Saleh', 'Development', 'Junior', '',);
const hadi = new Person(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', '',);
