const notecon = document.querySelector(".note-cont");
const btn = document.querySelector(".btn");
let note = document.querySelectorAll(".input-box");

function shownotes() {
  notecon.innerHTML = localStorage.getItem("notes");
}
shownotes();

function updatestorage() {
  localStorage.setItem("notes", notecon.innerHTML);
}

btn.addEventListener("click", () => {
  let inputbox = document.createElement("p");
  let img = document.createElement("img");
  inputbox.className = "input-box";
  inputbox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notecon.appendChild(inputbox).appendChild(img);
});

notecon.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updatestorage();
  } else if (e.target.tagName === "P") {
    note = document.querySelectorAll(".input-box");
    note.forEach((nt) => {
      nt.onkeyup = function () {
        updatestorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
