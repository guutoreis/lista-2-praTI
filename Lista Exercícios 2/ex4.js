/* 4. Fatorial Recursivo
Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
um Error, e n === 0 retornando 1. */

function fatorial(n) {
    
    if (n < 0) {
        throw new Error("Não existe fatorial de número negativo")
    }
    
    if (n === 0) {
        return 1
    }
    
    return n * fatorial(n - 1)
}

// Função para testar e apresentar erro
function testarFatorial(valor) {
    try {
        const resultado = fatorial(valor)
        console.log(`fatorial(${valor}) = ${resultado}`)
    } catch (error) {
        console.error(`ERRO: ${error.message}`)
    }
}

testarFatorial(6);  // 720
testarFatorial(3);  // 6
testarFatorial(1);  // 1
testarFatorial(0);  // 1
testarFatorial(-5); // Apresenta a mensagem de erro
