import '../scss/main.scss';
const textarea = document.querySelector(".form__textarea--js");
const save = document.querySelector(".save--js");
const load = document.querySelector(".load--js");
const currentValue = localStorage.getItem("data");
const info = document.querySelector(".info--js")
if (!currentValue){
 load.style.display = "none";
}
save.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("data", textarea.value);
  load.style.display = "block";
});
load.addEventListener("click", (e) => {
  e.preventDefault();
  textarea.value = localStorage.getItem("data");
});

