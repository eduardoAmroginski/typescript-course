"use strict";
// 1 - Selecione o link utilizando o método getElementById.
// 2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.
const element = document.getElementById('origamid');
if (element instanceof HTMLAnchorElement) {
    element.href = element.href.replace('http://', 'https://');
}
