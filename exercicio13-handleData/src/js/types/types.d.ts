type TransacaoPagamento = "Boleto" | "Cartão de Crédito"
type TransacaoStatus = "Recusada pela operadora de cartão" | "Paga" | "Aguardando pagamento" | "Estornada"

interface TransacaoAPI {
  Nome: string;
  ID: number;
  Email: string;
  ["Forma de Pagamento"]: TransacaoPagamento;
  Status: TransacaoStatus;
  ["Valor (R$)"]: string;
  Data: string;
  ["Cliente Novo"]: number;
}

interface Transacao {
    nome: string;
    id: number;
    email: string;
    pagamento: TransacaoPagamento;
    status: TransacaoStatus;
    moeda: string;
    valor: number | null;
    data: Date;
    novo: boolean;
  }