// Открытие плеера при клике на футер
document.querySelector('.music-player-footer').addEventListener('click', function() {
    var player = document.querySelector('.player');
    player.classList.add('visible');
    document.body.classList.add('no-scroll');
  });
  
  
  // Закрытие плеера при скролле вниз на мобильных устройствах
  let startY;
  
  window.addEventListener('touchstart', function(e) {
    startY = e.touches[0].clientY;
  });
  
  window.addEventListener('touchmove', function(e) {
    if (!startY) return;
  
    let moveY = e.touches[0].clientY;
    if (moveY - startY > 50) { // Если пользователь прокрутил вниз на 50 пикселей или больше
      var player = document.querySelector('.player');
      player.classList.remove('visible');
      document.body.classList.remove('no-scroll');
    }
  });
  
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