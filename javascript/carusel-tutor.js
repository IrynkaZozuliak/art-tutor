let currentIndex = 0; // Поточний індекс слайду
const visibleItems = 6; // Кількість видимих елементів
const sliderTrack = document.querySelector('.slider__track');
const totalItems = document.querySelectorAll('.slider__item').length;

// Обмеження максимального індексу
const maxIndex = totalItems - visibleItems;

// Функція для переміщення слайдера
function moveSlide(direction) {
  // Оновлення індексу
  currentIndex += direction;

  // Зупиняємося на межах слайдера
  if (currentIndex < 0) {
    currentIndex = 0; // Повертаємося на початок
  } else if (currentIndex > maxIndex) {
    currentIndex = maxIndex; // Зупиняємося на останньому доступному елементі
  }

  // Обчислюємо зсув
  const offset = -currentIndex * (100 / visibleItems);
  sliderTrack.style.transform = `translateX(${offset}%)`;
}
