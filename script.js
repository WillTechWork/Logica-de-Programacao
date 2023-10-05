// * COMPUTADOR SE RESUME:

// * Máquina que extrai dados;
// * Máquina que realiza processamento, ou seja, operações nos dados de entrada / saída.
// * Dado: É o que pode ser processado;
// * Informações: É o resultado de processamento;
// * Processamento de dados: Entrada (Dados) > Processamento > Saída (Informação).

// * Lógica?

// * É aquilo que faz sentido.

// * Para escrever um programa:

// * Aplicar a lógica para descrever os passos para resolver um problema em ordem de execução.

// * A lógica de programação:

// * É a técnica de sequenciar pensamentos, passos, fluxo de dados para atingir um objetivo: a informação.
// * A sequência de passos, instruções que o computador deve seguir é conhecida como um ALGORITMO.

// * ALGORITMO:

// Sequência lógica e finita de instruções que resolvem um problema;
// Exemplo: Receita de bolo, manual de instruções para solucionar um problema;
// Nem todo algoritmo é um programa de computador, mas todo programa de computador
// A Média do aluno, situação:
// Nem todo algoritmo é um programa de computador, mas todo programa de computador é ALGORITMO;
// Quem viabiliza o funcionamento dos algoritmos nos computadores: LINGUAGENS DE PROGRAMAÇÃO.

// ALGORITMO PARA CALCULAR A MÉDIA DE 3 NÚMEROS:

// 1- Início;
// 2- Receber o primeiro número: entrada 1;
// 3- Receber o segundo número: entrada 2;
// 4- Receber o terceiro número: entrada 3;
// 5- Somar os 3 números recebidos e dividir por 3;
// (entrada 1 + entrada 2 + entrada 3) / 3;
// 6- Exibir o resultado: print, echo, console.log ;
// 7- Fim

// TREINAR O RACIOCÍNIO LÓGICO COM - TORRE DE HANOI:

// Mover todos os discos para a direita, com o menor número de movimentos possíveis, sem colocar um disco em cima
// de um disco menor: https//www.somatematica.com.br/jogos/hanoi

// TREINAMENTO PARA PROGRAMAÇÃO VOLTADO AO PHP, EXCELENTE:
// https//www.somatematica.com.br/jogos.php */

console.log("Olá, mundo!");
document.write("Olá, documento!");
window.alert("Olá, janela!");


//Lógica de Programação
// Problema: obter 3 notas de um aluno, 
// calcular a média, exibir a média e situação condicional se o aluno foi: Aprovado(a) ou Reprovado(a).

// EXEMPLO

console.log("Início do programa");

// Declaração das variáveis
// const : Tipo de variável com o valor constante, que é inalterável.

const nota1 = parseInt(document.getElementById("Digite a nota 1:").value);
const nota2 = parseInt(document.getElementById("Digite a nota 2:").value);
const nota3 = parseInt(document.getElementById("Digite a nota 3:").value);

// Cálculo da média

const media = (nota1 + nota2 + nota3) / 3;

console.log("A nota 1 é:', nota1");
console.log("A nota 2 é:', nota2");
console.log("A nota 3 é:', nota3");

console.log("A média do aluno é:", media);

console.log("Fim da execução do programa");

// EXERÍCIO PRÁTICO:

console.log("A nota 1 é:', nota1");
console.log("A nota 2 é:', nota2");
console.log("A nota 3 é:', nota3");
console.log("A média do aluno é:', media");

if (media >= 7) {
    console.log("APROVADO");
} else if (media < 7 && media >= 5) {
    console.log("EXAME");

} else {
    (media < 5)
    console.log("REPROVADO");
}

console.log("Fim do programa");



// EXEMPLO PRÁTICO 02

<form action="">

    <div class="controle-form">
        <label for="">Nota 1:</label>
        <Input type="text" id="nota1">
    </div>

    <div class="controle-form">
        <label for="">Nota 2:</label>
        <Input type="text" id="nota2">
    </div>

    <div class="controle-form">
        <label for="">Nota 3:</label>
        <Input type="text" id="nota3">
    </div>
    <buttom onclick="Myfunction()">Calcular</buttom>



</form>