/* 1. Validação de Datas
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para
fevereiro) e false caso contrário. */

function ehDataValida(dia, mes, ano) {
  if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
    return false
  }

  let date = new Date(ano, mes - 1, dia)
  return (
    date.getFullYear() === ano &&
    date.getMonth() === mes - 1 &&
    date.getDate() === dia
  )
}

// Testes
console.log(ehDataValida(29, 2, 2024)); // true (ano bissexto)
console.log(ehDataValida(29, 2, 2025)); // false (ano não é bissexto)
console.log(ehDataValida(31, 7, 2025)); // true (julho tem 31 dias)
console.log(ehDataValida(31, 6, 2025)); // false (janeiro tem 31 dias)
