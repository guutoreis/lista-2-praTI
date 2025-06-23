/* 8. Agrupamento por Propriedade
Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total. */

const vendas = [
    { cliente: "Kannemann", total: 200},
    { cliente: "Kannemann", total: 50},
    { cliente: "Geromel", total: 500},
    { cliente: "Geromel", total: 150},
    { cliente: "Geromel", total: 100},
]

const resultado = vendas.reduce( (acumulador, vendaAtual) => {
    const cliente = vendaAtual.cliente

    if (!acumulador[cliente]) {
        acumulador[cliente] = 0
    }

    acumulador[cliente] += vendaAtual.total

    return acumulador

}, {})

console.log(resultado)