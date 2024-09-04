
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

interface ProductDetails {
  marca: string,
  cor: string
}

type Sell = [string, number, string, ProductDetails]

async function fetchVendas() {
  const response = await fetch("https://api.origamid.dev/json/vendas.json");
  const data = await response.json();
  somarVendas(data);
}

function somarVendas(sales: Sell[]){
  
  // Com for
  let total1 = 0;
  
  for(let i = 0; i < sales.length; i++){
    total1 += sales[i][1]
  }

  document.body.innerHTML += `<p>Total: R$ ${total1}</p>`;

    // Com reduce
    const total2 = sales.reduce((total, venda) => {
      return total + venda[1];
    }, 0);

    document.body.innerHTML += `<p>Total: R$ ${total2}</p>`;

}

fetchVendas();