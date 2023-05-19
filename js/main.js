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

var iPhoneStyles = {
  bottom: '150px',
  fontSize: '24px',
  lineHeight: '28px'
};

var tickerElement = document.querySelector('.plug__ticker');
if (/iPhone/.test(navigator.userAgent)) {
  // Если пользователь заходит через iPhone
  // Изменяем стили для элемента .plug__ticker
  for (var style in iPhoneStyles) {
    tickerElement.style[style] = iPhoneStyles[style];
  }
}
