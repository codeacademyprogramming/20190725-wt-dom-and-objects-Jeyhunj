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
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.birthday = birthday;
};


function addStudent() {
    let student = new Student(stuName.value, stuSurname.value, stuEmail.value, stuBirthday.value);
    
    students.push(student);

    let tr = document.createElement("tr");
    document.querySelector(".student-list").appendChild(tr);
    tr.innerHTML = `<td>${stuName.value}</td>
                    <td>${stuSurname.value}</td>
                    <td>${stuEmail.value}</td>
                    <td>${stuBirthday.value}</td>`
                   
}



// Check Valid Email

function checkEmail() {
    var email = document.getElementById('email');
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus;
        return false;
    }
}

// Check all Cells Empty or Filled

function emptyalert() {
    if(document.getElementById("name").value == 0,document.getElementById("surname").value == 0,document.getElementById("email").value == 0,document.getElementById("birthday").value == 0)
   {
       alert("Please be sure  you fill them all")
   }  else{
       addStudent()
       
   } 
   }







