const color = document.querySelectorAll(".color");
// console.log(color);

color.forEach((clr) => {
  clr.addEventListener("click", (e) => {
    const currColor = e.target.id;
    document.body.style.backgroundColor = `${currColor}`;
    document.querySelector("#color-container").classList.add("display");
  });
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelector("#color-container").classList.remove("display");
    document.body.style.backgroundColor = `white`;
  }
});
