const images = document.querySelectorAll('.img_osnova6');
const defaultSize = { width: 45, height: 45 };
const activeSize = { width: 70, height: 70 };

images.forEach((img) => {
  // при наведении на элемент
  img.addEventListener('mouseenter', () => {
    // установить все в базовый размер
    images.forEach(i => {
      i.style.width = defaultSize.width + 'px';
      i.style.height = defaultSize.height + 'px';
    });
    // увеличить текущий
    img.style.width = activeSize.width + 'px';
    img.style.height = activeSize.height + 'px';
  });

  // при исчезновении наведения — вернуть все к базовому
  img.addEventListener('mouseleave', () => {
    images.forEach(i => {
      i.style.width = defaultSize.width + 'px';
      i.style.height = defaultSize.height + 'px';
    });
  });
});