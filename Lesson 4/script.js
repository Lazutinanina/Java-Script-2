'use strict';

// 1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.
// 2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.

var boxNextExp = document.getElementsByClassName('box');
var textBefore = document.getElementById('text-box__before-text'); 
var textAfter = document.getElementById('text-box__after-text'); 

var changeText = () => {
    let str = textBefore.textContent;
    console.log(str);
    textAfter.innerText = str.replace(/\B'/g, '"');
};



