window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
  // Добавляем/убираем класс в зависимости от положения скролла
  if (scrollPosition > 10) { // Можно настроить порог срабатывания
    header.classList.add('blurred');
  } else {
    header.classList.remove('blurred');
  }
});