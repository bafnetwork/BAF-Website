const btn = document.getElementById("theme-switcher");

const currentTheme = localStorage.getItem("theme");


if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
  document.getElementById("theme-switcher").setAttribute("class", "fa fa-sun-o fa-2x");
}

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
  location.reload();
  document.getElementById("theme-switcher").setAttribute("class", "fa fa-sun-o fa-2x");
});
