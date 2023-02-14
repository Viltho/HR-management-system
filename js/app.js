'use strict';

function Person(fullName, department, level, imgurl) {
    this.id = 0;
    this.name = fullName;
    this.dep = department;
    this.level = level;
    this.img = imgurl;
    this.salary = 0;
}

Person.prototype.salaryCalculate = function () {
    if (this.level === 'Junior') {
        this.salary = Math.floor((Math.floor(Math.random() * (1000 - 500 + 1)) + 500) * (1 - 0.075));
    } else if (this.level === 'Mid-Senior') {
        this.salary = Math.floor((Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000) * (1 - 0.075));
    } else if (this.level === 'Senior') {
        this.salary = Math.floor((Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500) * (1 - 0.075));
    }
    return this.salary;
}

Person.prototype.idCalculate = function () {
    this.id = `${(new Date()).getTime()}`.slice(9);
    return this.id;
}

Person.prototype.render = function () {

    const container = document.getElementById('root');

    const divEl = document.createElement('div');
    divEl.classList.add("meow");
    container.appendChild(divEl);

    const imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src', this.img);
    imgEl.addEventListener("error", function(event) {
        event.target.src = "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg";
        event.onerror = null;
      })


    const idEl = document.createElement('p');
    divEl.appendChild(idEl);
    idEl.textContent = `ID : ${this.id} has been added`;

    const detailEl = document.createElement('h5');
    divEl.appendChild(detailEl);
    detailEl.textContent = `${this.name}, ${this.dep}, as a ${this.level} with a salary of ${this.salary}.`

}

let employeeForm = document.getElementById("employeeForm");
employeeForm.addEventListener('submit', addNewEmployee);

function addNewEmployee(event) {

    event.preventDefault();

    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let imgurl = event.target.imgurl.value;

    let newEmployee = new Person(fullName, department, level, imgurl);
    newEmployee.salaryCalculate();
    newEmployee.idCalculate();
    newEmployee.render();
}
