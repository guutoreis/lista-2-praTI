/* 6. Memoization
Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações. */

function memoize(fn) {

    const cache = {}
    
    return function(...args) {
        const chave = JSON.stringify(args)
        
        if (chave in cache) {
            console.log('Retornando do cache:', chave)
            return cache[chave]
        }
        
        console.log('Calculando novo valor para:', chave)
        const resultado = fn(...args)
        cache[chave] = resultado
        
        return resultado
    }
}

// Exemplo com uma função de soma
function soma(a, b) {
    console.log('Calculando soma...')
    return a + b
}

const somaMemoizada = memoize(soma)

console.log(somaMemoizada(2, 3))
console.log(somaMemoizada(2, 3)) 

console.log(somaMemoizada(5, 7))
