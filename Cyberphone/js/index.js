document.querySelector(".darkMode__btn").onclick = function () {
  document.querySelector(".darkMode__box").classList.toggle("is-hide");
};

var checkbox = document.querySelector('input[name="darkMode"]');

checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.querySelector("body").classList.add("dark");
  } else {
    document.querySelector("body").classList.remove("dark");
  }
});
