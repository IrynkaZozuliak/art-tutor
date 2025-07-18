 

document.getElementById("dismiss-popup-btn").addEventListener("click", function () {
  document.getElementsByClassName("popup")[0].classList.remove("active");

  // Показати кнопку "Contact Me" знову
  document.getElementById("contact-popup-btn").style.display = "inline-block";
});

document.getElementById("contact-popup-btn").addEventListener("click", function (event) {
  event.preventDefault();

  // Показати popup
  document.getElementsByClassName("popup")[0].classList.add("active");

  // Сховати кнопку
  document.getElementById("contact-popup-btn").style.display = "none";
});
