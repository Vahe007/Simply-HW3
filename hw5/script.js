// // import fs from "fs/Promises";
// const fs = require("fs/promises")

// let json = "";
// fs.readFile(__dirname + "/db/data.json", "utf-8").then((err, data) => {
//     json = data;
//     console.log(data);
// });

// fs.writeFile(__dirname + "/b.txt", json);

const hr = document.createElement("hr");
hr.className = "blue-hr";

const title = document.querySelector("h1");
const licenseBtns = document.getElementsByClassName("licenses-btn");
const menuBtns = document.querySelector(".menu-buttons");
// const system = document.querySelector(".sys-main-content");
const system = document.querySelectorAll(".data");
const subSystem = document.querySelectorAll(".sub-data");


console.log(subSystem);

const getData = async () => {
  const response = await fetch("./db/data.json");
  return response.json();
};

getData().then(({ page_title, plans, tabs }) => {
  title.innerHTML = page_title;

  Array.from(licenseBtns).forEach((el, index) => {
    el.children[1].innerHTML = plans[index].name;
    plans[index].active ? el.classList.add("selected") : null;
  });

  tabs.forEach((el, index) => {
    menuBtns.children[index].firstElementChild.innerHTML = el.title;
    if (Object.keys(el.data).length > 0) {
      menuBtns.children[index].firstElementChild.classList.add("selected");
      menuBtns.children[index].append(hr);
      appendToSystem(el.data);
    }
  });


});

function appendToSystem(data) {
//   data.systems.forEach((item, objIndex) => {
    
//   });


    Array.from(system).forEach((el, index) => {
        const values = Object.values(data.systems[0]);
        el.innerHTML = values[index];
    });

    data.subsystems.forEach((el, subIndex) => {
        if (el.system_id === data.systems[0].id) {
            const values = Object.values(el);
            const keys = Object.keys(el);
            Array.from(subSystem).forEach((sub, index) => {
                sub.innerHTML = keys[index] !== "system_id" ? el[keys[index]] : null;
            })
        }
    })

}


function sys1GetId() {
    return 
}
function sys2GetId() {
    
}
