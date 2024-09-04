import currencyToNumber from "./currencyToNumber.js";
import stringToDate from "./stringToDate.js";

export default function normalizeTransation(transaction: TransacaoAPI): Transacao{
    return {
        nome: transaction.Nome,
        id: transaction.ID,
        email: transaction.Email,
        pagamento: transaction["Forma de Pagamento"],
        status: transaction.Status,
        moeda: transaction["Valor (R$)"],
        valor: currencyToNumber(transaction["Valor (R$)"]),
        data: stringToDate(transaction.Data),
        novo: Boolean(transaction["Cliente Novo"]),
    }
}