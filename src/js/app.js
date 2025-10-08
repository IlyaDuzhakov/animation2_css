const circle = document.querySelector(".circle");
const container = document.querySelector(".container");
const btnDelete = document.querySelector(".btn-delete");

circle.addEventListener("click", () => {
  //  container.classList.add("active")
  container.style.animationName = `show`;
  container.style.animationDuration = `1s`;
  setTimeout(() => {
    container.style.opacity = `1`;
  }, 100);

  circle.classList.add("hidden");
});

btnDelete.addEventListener("click", () => {
  container.style.opacity = `0`;
  circle.classList.remove("hidden");
});
