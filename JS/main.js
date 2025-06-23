// Плавный скролл по кнопкам
document.querySelectorAll('[data-scroll]').forEach(btn => {
  btn.addEventListener('click', e => {
    const target = document.getElementById('footer');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Аккордеоны
document.querySelectorAll('.accordion__item').forEach(item => {
  const header = item.querySelector('.accordion__header');
  const body = item.querySelector('.accordion__body');
  const icon = item.querySelector('.icon');

  header.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open');
    if (isOpen) {
      body.style.maxHeight = body.scrollHeight + 'px';
      icon.src = 'assets/image/uppp.svg';
    } else {
      body.style.maxHeight = null;
      icon.src = 'assets/image/downnn.svg';
    }
    
    document.querySelectorAll('.accordion__item').forEach(other => {
      if (other !== item) {
        other.classList.remove('open');
        other.querySelector('.accordion__body').style.maxHeight = null;
        other.querySelector('.icon').src = 'assets/image/downnn.svg';
      }
    });
  });
});
