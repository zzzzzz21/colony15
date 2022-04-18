'use strict';

/** ページ内アンカー */
const internalLinks = document.querySelectorAll(`a[href^="#"]`);
internalLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.hash;
    const targetElement = document.querySelector(targetId);
    const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
    window.scrollTo({
      top: targetOffsetTop,
      behavior: "smooth"
    });
  })
})
