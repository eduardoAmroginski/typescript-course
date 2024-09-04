function filterValue(transaction) {
    return transaction.valor !== null;
}
export default class Statistics {
    transactions;
    total;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
    }
    setTotal() {
        return this.transactions.filter(filterValue).reduce((acc, item) => {
            return acc + item.valor;
        }, 0);
    }
}
//# sourceMappingURL=Statistics.js.map