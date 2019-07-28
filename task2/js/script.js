"use strict";

// Cap Text

let body = document.querySelector("body");
let main = document.createElement("main");
let masterDiv =  document.createElement("div");
masterDiv.setAttribute("class", "container");

let script = document.querySelector("script");
body.insertBefore(main, script);
main.appendChild(masterDiv);

let h1 = document.createElement("h1");
h1.innerText = "WHAT PEOPLE SAY";
masterDiv.appendChild(h1);
let h2 = document.createElement("h2");
h2.innerText = "Reviews";
masterDiv.appendChild(h2);


// Items

let itemsDiv = document.createElement("div");

let itemDiv = document.createElement("div");
let item1Div = document.createElement("div");
let item2Div = document.createElement("div");
itemDiv.setAttribute("class", "item");
item1Div.setAttribute("class", "item");
item2Div.setAttribute("class", "item");

itemsDiv.setAttribute("id", "master");
masterDiv.appendChild(itemsDiv);

itemsDiv.appendChild(itemDiv);
itemsDiv.appendChild(item1Div);
itemsDiv.appendChild(item2Div);

let p = document.createElement("p");
let p1 = document.createElement("p");
let p2 = document.createElement("p");

p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
p1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
p2.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

itemDiv.appendChild(p);
item1Div.appendChild(p1);
item2Div.appendChild(p2);


// Images

let itemImg = document.createElement("img");
let item1Img = document.createElement("img");
let item2Img = document.createElement("img");

itemImg.setAttribute("src", "https://images.unsplash.com/photo-1564259291542-ffdacda9ec1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80");
itemDiv.appendChild(itemImg);

item1Img.setAttribute("src", "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80");
item1Div.appendChild(item1Img);

item2Img.setAttribute("src", "https://images.unsplash.com/photo-1485043433441-db091a258e5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80");
item2Div.appendChild(item2Img);

let h5 = document.createElement("h5");
let h5$1 = document.createElement("h5");
let h5$2 = document.createElement("h5");

h5.innerText = "Mary Martinez";
h5$1.innerText = "Smith Anderson";
h5$2.innerText = "Jane Jackson";

itemDiv.appendChild(h5);
item1Div.appendChild(h5$1);
item2Div.appendChild(h5$2);