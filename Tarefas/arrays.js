const readline = require('readline-sync');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});


rl.question('Digite seu nome completo: ', (nomeCompleto)) =>{
    nomeCompleto = nomeCompleto.trim().replace(/\s+/g, ' ');
        console.log('\nNome em maiúsculas: ' + nomeCompleto.toUpperCase());
        console.log('Nome em minúsculas: ' + nomeCompleto.toLowerCase());
    const totalCaracteresSemEspacos = nomeCompleto.replace(/\s/g, '').length;
        console.log('Total de caracteres (sem espaços): ' + totalCaracteresSemEspacos);
    const partes = nomeCompleto.split(' ');

    const primeiroNome = partes[0];
    const ultimoNome = partes[partes.length - 1];

        console.log('Primeiro nome: ' + primeiroNome);
        console.log('Último nome: ' + ultimoNome);
rl.close();
}