document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  createArtworks();
});

function createArtworks() {
  for (let i = 100; i < 301; i += 20) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.height = `${i}px`;
    box.style.width = `${i}px`;
    document.querySelector("#artwork1").appendChild(box);
  }

  for (let i = 0; i < 91; i += 10) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.transform = `rotate(${i}deg)`;
    document.querySelector("#artwork2").appendChild(box);
  }

  for (let i = 0; i < 201; i += 10) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.height = `${i}px`;
    circle.style.width = `${i}px`;
    document.querySelector("#artwork3").appendChild(circle);
  }

  for (let i = -90; i < 91; i += 20) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.transform = `translate(${i}px, ${i}px)`;
    document.querySelector("#artwork4").appendChild(box);
  }

  for (let i = 1; i < 513; i = i * 2) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.height = `${i}px`;
    circle.style.width = `${i}px`;
    document.querySelector("#artwork5").appendChild(circle);
  }

  for (let i = -20; i < 46; i += 5) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.transform = `translate(${i - 50}px) rotate(${i * 4}deg)`;
    document.querySelector("#artwork6").appendChild(circle);
  }

  for (let i = 0; i < 201; i += 10) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.height = `${i}px`;
    circle.style.width = `${i}px`;
    circle.style.transform = `translate(${i}px, ${-i / 2}px)`;
    document.querySelector("#artwork7").appendChild(circle);
  }

  for (let i = 50; i < 201; i += 10) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.height = `${i}px`;
    box.style.width = `${i}px`;
    box.style.transform = `translate(${i / 2}px) rotate(${i}deg)`;
    document.querySelector("#artwork8").appendChild(box);
  }

  for (let i = 50; i < 201; i += 30) {
    let box = document.createElement("div");
    let circle = document.createElement("div");
    box.classList.add("box");
    circle.classList.add("circle");
    box.style.height = `${i}px`;
    box.style.width = `${i}px`;
    circle.style.height = `${i}px`;
    circle.style.width = `${i}px`;
    document.querySelector("#artwork9").appendChild(box);
    document.querySelector("#artwork9").appendChild(circle);
  }
}
