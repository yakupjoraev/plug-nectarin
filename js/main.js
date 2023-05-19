//плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};


if (/iPhone/.test(navigator.userAgent)) {
  // Если пользователь заходит через iPhone
  // Изменяем стили для элемента .plug__ticker
  var tickerElement = document.querySelector('.plug__ticker');
  tickerElement.style.bottom = '220px';
  tickerElement.style.fontSize = '24px';
  tickerElement.style.lineHeight = '28px';
}
