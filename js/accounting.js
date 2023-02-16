'use strict';

let personArr;

function getPeople() {
    let jsonArr = localStorage.getItem("allPeople");
    if (jsonArr === null) {
        personArr = [];
    } else {
        personArr = JSON.parse(jsonArr);
    }
}

function workCheck() {
    let resultObj = {};

    for (const employee of personArr) {
        if (!(employee.dep in resultObj)) {
            resultObj[employee.dep] = {
                lengthOfEmployeePerDepartment: 1,
                sumOfSalaryPerDepartment: employee.salary,
                avgOfSalaryPerDepartment: employee.salary
            };
        } else {
            resultObj[employee.dep].lengthOfEmployeePerDepartment++;
            resultObj[employee.dep].sumOfSalaryPerDepartment += employee.salary;
            resultObj[employee.dep].avgOfSalaryPerDepartment =
                resultObj[employee.dep].sumOfSalaryPerDepartment /
                resultObj[employee.dep].lengthOfEmployeePerDepartment;
        }
    }

    const tableRowBody = document.getElementById('tbody');
    tableRowBody.innerHTML = "";

    for (const dep in resultObj) {
        const tableRow1 = document.createElement('tr');
        tableRowBody.appendChild(tableRow1);

        const tdE11 = document.createElement('td');
        tableRow1.appendChild(tdE11);
        tdE11.textContent = dep;

        const tdE12 = document.createElement('td');
        tableRow1.appendChild(tdE12);
        tdE12.textContent = resultObj[dep].lengthOfEmployeePerDepartment;

        const trE13 = document.createElement('td');
        tableRow1.appendChild(trE13);
        trE13.textContent = resultObj[dep].sumOfSalaryPerDepartment;

        const trE14 = document.createElement('td');
        tableRow1.appendChild(trE14);
        trE14.textContent = resultObj[dep].avgOfSalaryPerDepartment;
    }


    const footCell1 = document.getElementById('footCell1');
    footCell1.textContent = personArr.length;

    const footCell2 = document.getElementById('footCell2');
    let x = 0;
    for (const employee of personArr) {
        x += employee.salary;
    }
    footCell2.textContent = x;

    const footCell3 = document.getElementById('footCell3');
    footCell3.textContent = Math.round(x / personArr.length);
}

getPeople();
workCheck();
