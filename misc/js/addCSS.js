'use strict'

const style = document.createElement('style');
style.innerHTML = `
    #sidebar-quicklinks, li.top-level-entry-container:nth-child(3), .article-actions-entries, .auth-container, .document-toc, .button-wrap {
  display: none;}`;
document.head.appendChild(style);