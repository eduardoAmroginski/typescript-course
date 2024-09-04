/**
 * Recebe string: '1.200,50' retorna number: 1200.50
 */
export default function currencyToNumber(currency) {
    const value = Number(currency.replaceAll(".", "").replaceAll(",", "."));
    return isNaN(value) ? null : value;
}
//# sourceMappingURL=currencyToNumber.js.map