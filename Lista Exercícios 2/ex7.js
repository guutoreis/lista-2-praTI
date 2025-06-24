/* 7. Mapeamento e Ordenação
Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort. */

const produtos = [
  {nome: 'Camiseta do Grêmio', preco: 250},
  {nome: 'Bola de futebol', preco: 50},
  {nome: 'Playstation 5', preco: 3000},
  {nome: 'Nintendo Swtich', preco: 2500},
  {nome: 'Alexa', preco: 220},
]

function produtosPorNome(produtos){
  produtos.sort(function(a,b){
    if(a.preco > b.preco){
      return 1
    }
    if(a.preco <b.preco){
      return -1
    }
    return 0
  })
    return produtos.map(produto => produto.nome)
  // OPÇÃO PARA RETORAR UM OBJETO
  // return produtos.map(produto => ({
  //   nome: produto.nome
  }))
}
console.log(produtosPorNome(produtos))
