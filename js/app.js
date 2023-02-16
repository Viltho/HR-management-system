'use strict';
let personArr = [];
function Person(fullName, department, level, imgurl) {
    this.id = 0;
    this.name = fullName;
    this.dep = department;
    this.level = level;
    this.img = imgurl;
    this.salary = 0;
    personArr.push(this);
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

function render() {

    const container = document.getElementById('root');
    container.innerHTML = "";

    if (personArr == null) {
        personArr = [];
    }

    for (let i = 0; i < personArr.length; i++) {
        const divEl = document.createElement('div');
        divEl.classList.add("meow");
        container.appendChild(divEl);

        const imgEl = document.createElement('img');
        divEl.appendChild(imgEl);
        imgEl.setAttribute('src', personArr[i].img);
        imgEl.setAttribute('alt', 'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg');
        imgEl.addEventListener("error", function (event) {
            event.target.src = "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg";
            event.onerror = null;
        })

        const idEl = document.createElement('p');
        divEl.appendChild(idEl);
        idEl.textContent = `ID : ${personArr[i].id} has been added`;

        const detailEl = document.createElement('h5');
        divEl.appendChild(detailEl);
        detailEl.textContent = `${personArr[i].name}, ${personArr[i].dep}, as a ${personArr[i].level} with a salary of ${personArr[i].salary}.`
    }
}

let employeeForm = document.getElementById("employeeForm");
employeeForm.addEventListener('submit', addNewEmployee);

function getPeople() {
    let jsonArr = localStorage.getItem("allPeople");
    personArr = JSON.parse(jsonArr);
}

function addNewEmployee(event) {

    event.preventDefault();

    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let imgurl = event.target.imgurl.value;

    let newEmployee = new Person(fullName, department, level, imgurl);

    newEmployee.salaryCalculate();
    newEmployee.idCalculate();

    let jsonArr = JSON.stringify(personArr);
    localStorage.setItem("allPeople", jsonArr);

    render();
}

getPeople();

render();
