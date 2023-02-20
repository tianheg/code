'use strict'

// ==UserScript==
// @name         Hide Navbar on Scroll Down
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide Navbar on Scroll Down
// @author       tianheg
// @match        https://developer.mozilla.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mozilla.org
// @grant        none
// ==/UserScript==

;(function () {
  'use strict';

  let prevScrollPos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    const header = document.getElementsByClassName(
      'main-document-header-container'
    )[0];
    console.log(header);
    if (prevScrollPos > currentScrollPos) {
      header.style.top = '0';
    } else {
      header.style.cssText = 'top: -135px;';
    }
    prevScrollPos = currentScrollPos;
  };
  // https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
})()