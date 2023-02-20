'use strict'

// 对表格中的奇数列设置不同样式
function stripeTables() {
  if (!document.getElementsByTagName) return false;
  let tables = document.getElementsByTagName('table');
  let odd, rows;
  for (let i = 0; i < tables.length; i++) {
    odd = false;
    rows = tables[i].getElementsByTagName('tr');
    for (let j = 0; j < rows.length; j++) {
      if (odd == true) {
        rows[j].style.backgroundColor = '#ffc';
        odd = false;
      } else {
        odd = true;
      }
    }
  }
}