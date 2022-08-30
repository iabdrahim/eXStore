document.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("nav-link")) {
    let al = document.querySelectorAll(".nav-link");
    al.forEach((el) => {
      el.removeAttribute("id");
    });
    e.target.setAttribute("id", "act");
  }
});
