function toggleNumb() {
  let btn = document.querySelector(".btn")
  let main = document.querySelector(".main");


  if (main.style.display === "none") {
    main.style.display = "flex";
    btn.innerHTML = "hide numbers";
    btn.style.marginTop = ""

  } else {
    main.style.display = "none";
    btn.innerHTML = "show again";
    btn.style.marginTop = "10rem"
  }
}