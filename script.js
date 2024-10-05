// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

const indice = 13;
let soma = 0;
let k = 0;

while(k < indice) {
    k++
    soma += k
}

alert(`O valor da variável soma é ${soma}`)

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function fibonacci(entrada) {
    let fibonacci = 0;
    let indice = 1;
    let indiceAnt = 0;
    while(true) {
        if (entrada > 0) {
            while (indice <= entrada){
                fibonacci = indice + indiceAnt;
                indiceAnt = indice;
                indice = fibonacci;
                if (indice == entrada) {
                    alert("Este número faz parte da sequência de Fibonacci");
                    return
                }
            }
            alert("Este número não faz parte da sequência de Fibonacci")
            break;
        } else {
            alert("Digite um número positivo")
        }
    }
}

const numero = parseInt(prompt("Digite um número para verificar se faz parte da sequência de Fibonacci")
)

fibonacci(numero)

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

async function carregarDados() {
    try {
        let resposta = await fetch('dados.json');
        resposta = await resposta.json();

        const diasFaturados = resposta.filter((dias) => dias.valor > 0);
        const menorFaturamento = Math.min(...diasFaturados.map((dia) => dia.valor))
        const maiorFaturamento = Math.max(...diasFaturados.map((dia) => dia.valor))

        const mediaFaturamento = diasFaturados.reduce((total, dia) => total + dia.valor, 0) /diasFaturados.length;

        const acimaDaMedia = diasFaturados.filter((dia) => dia.valor > mediaFaturamento).length;

        alert(`O menor faturamento foi de ${menorFaturamento}, o maior de ${maiorFaturamento}, e a quantidade de dias acima da média foram de ${acimaDaMedia}`)
    } catch (err) {
        console.error(err);
    }
}

carregarDados();

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

const dados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const faturamentoTotal = Object.values(dados).reduce((total, valor) => total += valor, 0);
console.log(`Faturamento Total: ${faturamentoTotal}`);


const percentualPorEstado = {};

for (let estado in dados) {
    const valor = dados[estado];
    const percentual = (valor / faturamentoTotal) * 100;
    percentualPorEstado[estado] = percentual.toFixed(2);
    console.log(`${estado}: ${percentualPorEstado[estado]}%`);
};

let resultados = "";

for(let estado in percentualPorEstado) {
    resultados += `${estado}: ${percentualPorEstado[estado]}% \r`;
};

alert(`O percentual dos estados é de \r ${resultados}`);

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;


function inverterString(str) {
    let resultado = "";
    for(let i = str.length -1; i >= 0; i--) {
        resultado += str[i];
    };
    return resultado;
};

const res = prompt('Digite uma palavra para ser invertida:')
alert(inverterString(res));