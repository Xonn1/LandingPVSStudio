const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
  const header = accordion.querySelector('.accordion-header');
  const content = accordion.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    const isActive = accordion.classList.contains('active');

    // Закрываем все аккордеоны
    accordions.forEach((acc) => {
      acc.classList.remove('active');
      acc.querySelector('.accordion-content').style.height = 0;
    });

    // Если текущий был неактивен — открываем
    if (!isActive) {
      accordion.classList.add('active');
      content.style.height = content.scrollHeight + 'px';
    }
  });
});
