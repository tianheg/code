'use strict'

// 为元素的兄弟添加样式
function styleElementSiblings(tag, theclass) {
  if (!document.getElementsByTagName) return false;
  let elems = document.getElementsByTagName(tag);
  let elem;
  for (let i = 0; i < elems.length; i++) {
    elem = getNextElement(elems[i].nextSibling);
    addClass(elem, theclass);
  }
}

function getNextElement(node) {
  if (node.nodeType == 1) {
    return node;
  }
  if (node.nextSibling) {
    return getNextElement(node.nextSibling);
  }
  return null;
}

// 封装一个 addClass 函数
function addClass(element, value) {
  if (!element.className) {
    element.className = value;
  } else {
    let newClassName = element.className;
    newClassName += ' ';
    newClassName += value;
    element.className = newClassName;
  }
}