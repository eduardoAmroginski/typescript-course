/**
 * Recebe string: '1.200,50' retorna number: 1200.50
 */

export default function currencyToNumber(currency: string): number | null{
    const value = Number(currency.replaceAll(".", "").replaceAll(",", "."));
    
    return isNaN(value) ? null : value;

}