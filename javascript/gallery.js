var modal = document.getElementById('myModal');
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");
var images = document.getElementsByClassName("image_gallery");
var currentImageIndex = 0;

// Показати модальне вікно з обраним зображенням
function showModal(index) {
  modal.style.display = "block";
  modalImg.src = images[index].src;
  captionText.innerHTML = images[index].alt;
  currentImageIndex = index;
}

// Прив'язуємо подію onclick до кожного зображення
for (var i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    var index = Array.prototype.indexOf.call(images, this);
    showModal(index);
  }
}

// Функція для перегортування зображень
function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  showModal(currentImageIndex);
}

// Прив'язуємо подію onclick до стрілок перегортування
document.getElementById('prevBtn').onclick = function() {
  changeImage(-1);
};

document.getElementById('nextBtn').onclick = function() {
  changeImage(1);
};

// Закриваємо модальне вікно при кліку на "close" 
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
}