// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.

function roundUp(value: string) : string;
function roundUp(value: number): number;
function roundUp(value: string | number): string | number{

  if(typeof value === "number"){
    return Math.ceil(value);
  }

  return Math.ceil(Number(value)).toString();
}

console.log(roundUp(2.55))
console.log(roundUp("3.25"));