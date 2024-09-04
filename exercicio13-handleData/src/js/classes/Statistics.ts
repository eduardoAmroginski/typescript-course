type TransacaoValor = Transacao & { valor: number };

function filterValue(transaction: Transacao): transaction is TransacaoValor {
  return transaction.valor !== null;
}

export default class Statistics {
  private transactions;
  total;

  constructor(transactions: Transacao[]) {
    this.transactions = transactions;
    this.total = this.setTotal();
  }

  private setTotal() {
    return this.transactions.filter(filterValue).reduce((acc, item) => {
      return acc + item.valor;
    }, 0);
  }
}
