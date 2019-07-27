"use strict";

let students = []
let inputs = document.getElementsByClassName("student-input");
let TdItems = "";

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
    
}