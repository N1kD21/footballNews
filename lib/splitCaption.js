'use strict';
const regexpCyr   = /[А-Яа-яёЁЇїІіЄєҐґ]/i;
const regexpZnaki = /[<>.,!:'"?|@#$%^&*()-_+=]/i;

const isCyrillic = (str, regexp) => regexp.test(str);
const otstup = 10;
const fun = (string) => {
  const arr = [];
  const celieChastiOtDeleniya = Math.trunc(string.length / 1024);
  let string1;
  for (let i = 0; i < celieChastiOtDeleniya + 1; i++) {
    if (isCyrillic(string.charAt(1024), regexpCyr) === true) {
      const indexSplit = string.indexOf(' ', (1024 - otstup));
      string1 = string.slice(0, indexSplit);
      string  = string.substring(indexSplit);
    } else if (isCyrillic(string.charAt(1024), regexpZnaki) === true) {
      const indexSplit = string.indexOf(' ', (1024 - 512));
      string1 = string.slice(0, indexSplit);
      string  = string.substring(indexSplit);
    } else if (string.charAt(1024) === ' ') {
      string1 = string.slice(0, 1024);
      string  = string.substring(1024);
    } else {
      string1 = string.slice(0);
    }
    arr.push(string1);
  }
  return arr;
};



module.exports = fun;
