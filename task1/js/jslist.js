"use strict";

let students = []
let inputs = document.getElementsByClassName("student-input");

let stuName = document.querySelector("#name");
let stuSurname = document.querySelector("#surname");
let stuEmail = document.querySelector("#email");
let stuBirthday = document.querySelector("#birthday");

let stuScores = document.querySelector("#stuscores");

let scores = document.querySelector("#scores");

// Add names to the table

function Student(name, surname, email, birthday) {
    this.name = name,
        this.surname = surname,
        this.email = email,
        this.birthday = birthday,
        this.scores = []
};




function getScores(){
    
    let ul = document.getElementById("score-list")
    let li = document.createElement("li")
    ul.appendChild(li)
    li.innerHTML =  stuScores.value 
    
}

function addStudent() {
    let student = new Student(stuName.value, stuSurname.value, stuEmail.value, stuBirthday.value);

    students.push(student);

    let tr = document.createElement("tr");
    document.querySelector(".student-list").appendChild(tr);
    tr.innerHTML = `<td>${stuName.value}</td>
                    <td>${stuSurname.value}</td>
                    <td>${stuEmail.value}</td>
                    <td>${stuBirthday.value}</td>`
    reset()

}



// Check Valid Email

function checkEmail() {
    let email = document.getElementById('email');
    let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let filter2 = /\d{4}-(((0)[0-9])|((1)[0-2]))-([0-2][0-9]|(3)[0-1])/
    if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        
    }else{
        
    addStudent()
    }
}

// Check all Cells Empty or Filled

function emptyalert() {
    if (document.getElementById("name").value == 0, document.getElementById("surname").value == 0, document.getElementById("email").value == 0, document.getElementById("birthday").value == 0) {
        alert("Please be sure  you fill them all")
    } else {
        checkEmail()

    }
}

function reset() {
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
}

// AverageScore

function getAverageScore() {
    let average = 0;
    if (this.scores.length > 0) {
        for (let i = 0; i < this.scores.length; i++) {
            average += this.scores[i];
        }
        average = average / this.scores.length;
    }
    return average;
};








