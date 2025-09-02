// O Desafio:
// Crie um programa que faça o seguinte:
// Pergunte ao usuário o nome completo.
// Mostre o nome completo em maiúsculas e minúsculas.
// Mostre quantos caracteres o nome completo tem (descontando os espaços em branco).
// Mostre o primeiro nome e o último nome separadamente.
// Lembrem-se das dicas:
// Para remover espaços, .trim() pode ser útil.
// Para contar caracteres, .length é seu amigo.
// Para quebrar o nome em partes (primeiro, último, etc.), o método .split() é a ferramenta ideal.

//================================================================================================

const readline = require('readline');


// Configuração para ler entrada do usuário
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

// Pergunta ao usuário o nome completo
rl.question('Digite seu nome completo: ', (nomeCompleto) )=> {
// Remove espaços extras no início, no fim e múltiplos espaços internos
// Aqui acontece a substituição usando uma expressão regular.
// /\s+/g explicado:
// /.../ → define uma regex (expressão regular).
// \s → corresponde a qualquer caractere de espaço em branco (inclui espaço comum, tabulação \t, quebras de linha \n, etc).
// + → significa “um ou mais”. Ou seja, encontra sequências de 1 ou mais espaços em branco consecutivos.
// g → flag de global, significa que a regex vai procurar todas as ocorrências na string, não só a primeira.
// O replace(..., ' ') substitui qualquer sequência de espaços múltiplos por apenas um espaço simples.

nomeCompleto = nomeCompleto.trim().replace(/\s+/g, ' ');

// Mostra o nome em maiúsculas e minúsculas
console.log('\nNome em maiúsculas: ' + nomeCompleto.toUpperCase());
console.log('Nome em minúsculas: ' + nomeCompleto.toLowerCase());

// Conta os caracteres sem os espaços
const totalCaracteresSemEspacos = nomeCompleto.replace(/\s/g, '').length;
console.log(
'Total de caracteres (sem espaços): ' + totalCaracteresSemEspacos
);

// Divide o nome em partes
const partes = nomeCompleto.split(' ');

const primeiroNome = partes[0];
const ultimoNome = partes[partes.length - 1];

console.log('Primeiro nome: ' + primeiroNome);
console.log('Último nome: ' + ultimoNome);

// Fecha a interface
rl.close();
});