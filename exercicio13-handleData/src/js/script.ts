import Statistics from "./classes/Statistics.js";
import fetchData from "./fetchData.js";
import normalizeTransation from "./NormalizeTransaction.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json"
  );
  console.log(data);

  if (!data) return;

  const transactions = data.map(normalizeTransation);
  fillTable(transactions);
  fillStatistics(transactions);
}

function fillList(list: CountList, containerId: string) {
  const containerElement = document.getElementById(containerId);

  if (containerElement) {
    Object.keys(list).forEach((key) => {
      containerElement.innerHTML += `<p>${key}: ${list[key]}</p>`;
    });
  }
}

function fillStatistics(transactions: Transacao[]) {
  const data = new Statistics(transactions);

  fillList(data.payment, "payment");
  fillList(data.status, "status");

  const spanTotal = document.querySelector<HTMLElement>("#total span");
  if (spanTotal) {
    spanTotal.innerHTML = data.total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  const bestDayElement = document.querySelector("#best-day span");
  if (bestDayElement) {
    bestDayElement.innerHTML = data.bestDay[0];
  }
}

function fillTable(transactions: Transacao[]): void {
  const tableBody = document.querySelector("#tb-transactions tbody");

  if (!tableBody) return;

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
