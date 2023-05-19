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


function smoothScrollTo(element, target, duration) {
  var start = element.scrollTop;
  var startTime = performance.now();

  function scroll(timestamp) {
    var currentTime = timestamp - startTime;
    var scrollDistance = target - start;
    var easeInOutCubic = function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 };

    var scrollPosition = start + (scrollDistance * easeInOutCubic(currentTime / duration));
    element.scrollTop = scrollPosition;

    if (currentTime < duration) {
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.getElementsByClassName('full-scroll');
  var div = 0;
  div = -1;
  Array.prototype.forEach.call(divs, function (element, i) {
    if (div < 0 && (element.offsetTop >= window.pageYOffset)) {
      div = i;
    }
  });

  function handleScroll(e) {
    e = e || window.event;
    var delta = e.wheelDelta || -e.detail;

    if (delta > 0) {
      if (div > 0) {
        div--;
      }
    } else {
      if (div < divs.length - 1) {
        div++;
      }
    }

    var scrollPosition = divs[div].offsetTop;
    smoothScrollTo(document.documentElement, scrollPosition, 800);

    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
  }

  function handleResize() {
    var scrollPosition = divs[div].offsetTop;
    window.scrollTo(0, scrollPosition);
  }

  window.addEventListener('mousewheel', handleScroll);
  window.addEventListener('DOMMouseScroll', handleScroll);
  window.addEventListener('resize', handleResize);
});
