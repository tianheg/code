'use strict';

const findContentChildren = function (g, s) {
  let num = 0;
  for (let i = 0; i < g.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (g[i] <= s[j]) {
        num = num + 1;
        return num;
      }
    }
  }
};
