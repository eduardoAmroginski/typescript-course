// 1 - Selecione os elementos com a classe link.

// 2 - Crie uma função que deve ser executada para cada elemento.

// 3 - Modificar através da função o estilo da color e border.

const links = document.querySelectorAll(".link");

links.forEach(link => {
  
  if(link instanceof HTMLElement){
    activateElement(link);
  }

});

function activateElement(element: HTMLElement){
  element.style.color = 'red';
  element.style.border = '4px solid purple';
}