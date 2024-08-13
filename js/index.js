// Обработчик клика на иконку поиска
document.getElementById('search-icon').addEventListener('click', function(event) {
    event.stopPropagation(); // Предотвращаем всплытие события, чтобы не вызвать скрытие инпута сразу после его открытия
    var searchInput = document.getElementById('search-input');
    
    // Переключение видимости инпута поиска
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
      searchInput.style.display = 'block'; // Показать инпут
    } else {
      searchInput.style.display = 'none'; // Скрыть инпут
    }
  });
  
  // Закрытие поиска при клике вне его области
  document.addEventListener('click', function(event) {
    var searchIcon = document.getElementById('search-icon');
    var searchInput = document.getElementById('search-input');
    
    // Если клик был не по иконке и не по инпуту
    if (!searchIcon.contains(event.target) && !searchInput.contains(event.target)) {
      searchInput.style.display = 'none'; // Скрыть инпут
    }
  });

// Player

// Получаем элементы
const footer = document.querySelector('.music-player-footer');
const playButtonFooter = document.querySelector('.footer-btn');
const playIconFooter = playButtonFooter.querySelector('i');
const playButtonPlayer = document.querySelector('.player .btn.rounded-circle');
const playIconPlayer = playButtonPlayer.querySelector('i');
const player = document.querySelector('.player');
const audio = new Audio('https://rusradio.hostingradio.ru/rusradio96.aacp');

// Функция для открытия плеера
function openPlayer() {
  player.classList.add('visible');
  document.body.classList.add('no-scroll');
}

// Функция для переключения между play и pause
function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playIconFooter.className = 'fa-solid fa-circle-pause';
    playIconPlayer.className = 'fa-solid fa-pause';
  } else {
    audio.pause();
    playIconFooter.className = 'fa-solid fa-circle-play';
    playIconPlayer.className = 'fa-solid fa-play ps-2';
  }
}




// Обработчик клика для открытия плеера при клике на футер
footer.addEventListener('click', function(e) {
  // Проверяем, что клик был не по кнопке play/pause
  if (!playButtonFooter.contains(e.target)) {
    openPlayer();
  }
});

// Обработчики кликов для обеих кнопок play/pause
playButtonFooter.addEventListener('click', function(e) {
  e.stopPropagation(); // предотвращаем всплытие клика на футер
  togglePlayPause();
});
playButtonPlayer.addEventListener('click', togglePlayPause);

// Обработчик для скрытия плеера при скролле вниз
let startY;

window.addEventListener('touchstart', function(e) {
  startY = e.touches[0].clientY;
});

window.addEventListener('touchmove', function(e) {
  if (!startY) return;

  let moveY = e.touches[0].clientY;
  if (moveY - startY > 100) {
    player.classList.remove('visible');
    document.body.classList.remove('no-scroll');
  }
});