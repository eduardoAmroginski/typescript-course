// Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.

interface companyInfosI {
    nome: string,
    fundacao: number
    pais: string
}

interface ProductsI{
    nome: string,
    preco: number,
    descricao: string,
    garantia: number | string,
    seguroAcidentes: boolean,
    empresaFabricante: companyInfosI,
    empresaMontadora: companyInfosI
}


async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
  }
  
  fetchProduct();
  
  function showProduct(data: ProductsI) {
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