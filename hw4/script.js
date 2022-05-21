const btns = document.querySelectorAll(".licenses-btn");
// const fs = require("fs/promises");
// import {fs} from "fs/promises";


// fs.readFile(`${__dirname}/db/data.json`, "utf-8").then((data) => {
//     console.log(data);
// })

const state = {
    selected: "",
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // btn.classList.add("selected");
        state.selected = btn;
        console.log(state.selected);
    })

})
