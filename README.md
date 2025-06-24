# 📘 Lista de Exercícios 2 - Aplicando conceitos intermediários em JavaScript

Este repositório contém exercícios intermediários em JavaScript, focados em estruturas de controle avançadas, funções recursivas e manipulação de arrays/objetos. Desenvolvidos para o curso da +Prati em parceria com a Codifica.

---

## 🧠 Descrição dos Exercícios

### 🔍 Seção 1: Estruturas de Controle Avançadas  
1. **Validação de Datas**  
   Implementa `ehDataValida(dia, mes, ano)` que verifica se uma data é real (considerando meses com 28-31 dias e anos bissextos)

2. **Jogo de Adivinhação**  
   Script que gera um número aleatório (1-100) e interage com o usuário até acertar, dando dicas "mais alto/baixo"

3. **Palavras Únicas**  
   Extrai palavras distintas de uma string (ex: "olá olá mundo" → ["olá", "mundo"])

### ⚙️ Seção 2: Funções e Recursão  
4. **Fatorial Recursivo**  
   Implementa `fatorial(n)` com recursão, tratando números negativos e 0!

5. **Debounce**  
   Cria `debounce(fn, delay)` que limita execuções frequentes de funções (útil para eventos de scroll/resize)

6. **Memoization**  
   Implementa `memoize(fn)` que cacheia resultados para otimizar chamadas repetidas

### 🧩 Seção 3: Arrays e Objetos Complexos  
7. **Mapeamento e Ordenação**  
   Transforma `[{ nome, preco }, ...]` em array de nomes ordenados por preço

8. **Agrupamento por Propriedade**  
   Usa `reduce` para somar totais por cliente em `[{ cliente, total }, ...]`

9. **Conversão Entre Formatos**  
   Duas funções complementares:  
   - `paresParaObjeto([ [chave,val], ... ])` → objeto  
   - `objetoParaPares({ chave: val })` → array de pares

---

## 🛠️ Tecnologias Utilizadas  
- JavaScript  
- Node.js (para execução local)  

---

## ✅ Requisitos  
- Node.js 14+ instalado  
- Navegador moderno (para versão web)  

```bash
# Verifique sua instalação
node -v
```

## ▶️ Como executar os exercícios

1. **Abra o terminal ou prompt de comando**

2. **Navegue até a pasta onde estão os exercícios:**  
```bash
cd "Lista de Exercícios 2"
```
3. **Execute o exercício desejado usando o Node.js:**
**Seção 1: Estruturas de Controle**
```bash
node ex1.js
node ex2.js
node ex3.js
```
**Seção 2: Funções e Recursão**
```bash
node ex4.js
node ex5.js
node ex6.js
```
**Seção 3: Arrays e Objetos**
```bash
node ex7.js
node ex8.js
node ex9.js
```
4. **Para os exercícios interativos (como o Jogo de Adivinhação), siga as instruções que aparecerem no terminal.**
5. **Para os exercícios com funções, você pode editar os valores de teste no próprio arquivo antes de executar.**


   


