import Statistics from "./classes/Statistics.js";
import fetchData from "./fetchData.js";
import normalizeTransation from "./NormalizeTransaction.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    console.log(data);
    if (!data)
        return;
    const transactions = data.map(normalizeTransation);
    fillTable(transactions);
    fillStatistics(transactions);
}
function fillStatistics(transactions) {
    const spanTotal = document.querySelector("#total span");
    if (!spanTotal)
        return;
    const data = new Statistics(transactions);
    spanTotal.innerHTML = data.total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}
function fillTable(transactions) {
    const tableBody = document.querySelector("#tb-transactions tbody");
    if (!tableBody)
        return;
    transactions.forEach((item) => {
        tableBody.innerHTML += `
        <tr>
          <td>${item.nome}</td>
          <td>${item.email}</td>
          <td>${item.id}</td>
          <td>${item.pagamento}</td>
          <td>${item.moeda}</td>
          <td>${item.data.toLocaleDateString()} - ${item.data.toLocaleTimeString()}</td>
          <td>${item.status}</td>
        </tr>
      
      
      `;
    });
}
handleData();
//# sourceMappingURL=script.js.map