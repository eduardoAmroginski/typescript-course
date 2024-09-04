"use strict";
// Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
      <div>
        <h2>${data.nome}</h2>
        <p>R$ ${data.preco}</p>
        <div>
            <h3></h3>Fabricante: ${data.empresaFabricante.nome}</h3>
        </div>
        <div>
            <h3></h3>Montadora: ${data.empresaMontadora.nome}</h3>
        </div>
      </div>
    `;
}
