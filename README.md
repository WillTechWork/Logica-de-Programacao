# Logica-de-Programacao

# Conceito de Sistema Computacional

O computador é uma máquina ou dispositivo capaz de executar uma sequência de instruções definidas pelo homem para gerar um determinado resultado, o qual atenda a uma necessidade específica (ex.: realizar cálculos, gerar relatórios). Essa sequência de instruções é denominada algoritmo, o qual pode ser definido como um conjunto de regras expressas por uma sequência lógica finita de instruções, que ao serem executadas pelo computador, resolvem um problema específico. Assim, podemos dizer que um ou mais algoritmos compõem o que conhecemos como programa de computador, que no âmbito profissional da área de informática é conhecido como software.

As partes físicas de um computador, tais como: dispositivos de entrada e saída (ex.: monitor, teclado, impressora, webcam), dispositivos de armazenamento (ex. memória volátil e permanente), processador, assim como todo o conjunto de elementos que compõem um computador são chamados de hardware. A Figura 1.1 apresenta os elementos que compõem o hardware.

# O computador se baseia em: PROCESADOR/PROCESSAMENTO <-> MEMÓRIA/ARMAZENAMENTO <-> ENTRADA/SAÍDA

* Dispositivo: mecanismo usado para obter um resultado.
* Instruções: ordens ou comandos para que um computador execute uma solicitação do homem (usuário), a fim de atender a uma determinada necessidade.
* Dessa forma, pode-se dizer que a combinação do hardware e do software forma o sistema computacional.

# Pensamento lógico:

A lógica pode ser entendida como conjunto de regras estabelecidas com o objetivo de chegar a um determinado resultado. Assim, existe toda uma estrutura lógica que caso seja modificada não faz sentido algum, trata-se de uma linguagem racional. Um exemplo disso são frases, verbos, letras e linguagens, por exemplo, não faz sentido dizer que "B não é B" ou, por exemplo, uma contradição "isso é uma frase" e "isso não é uma frase". 
* Tudo possui uma identidade e na lógica o resultado de uma operação só pode assumir um valor verdadeiro ou falso.
* Utilizamos naturalmente a lógica no nosso dia-a-dia e às vezes nem percebemos.
* Para análise de uma situação lógica utilizaremos premissas que são conhecimentos prévios sobre determinada situação.

# Exemplos:

Sei que a maçã está na geladeira, à geladeira está fechada, logo tenho que abrir a geladeira para pegar a maçã.
- (1º Premissa) - Sei que A está em B
- (2º Premissa) - Sei que B está fechado
- (3º Premissa) - Logo concluo que tenho que abrir B para pegar A
 
 
Por fim, por meio das premissas é possível chegar à um resultado lógico, analisando as o contexto geral por partes.
Como vimos anteriormente para realizarmos uma determinada ação devemos seguir passos, porém se esses passos estiverem desordenados não será possível chegar a uma conclusão ou caso chegue não será o esperado. Dessa forma, para que um raciocínio ou operação seja concluído com sucesso é necessário seguir o que chamamos de sequência lógica.
Uma sequência lógica pode ser definida como um conjunto de instruções que devem ser seguidas para realizar uma determinada tarefa.
Para um melhor entendimento, vamos considerar a sequência a seguir:
2, 5, 12, 21, 32?...
Qual o valor de (?) na sequência?
Podemos perceber que existe um padrão nessa sequência, ou seja, uma lógica.
Analisando é possível observar que o número anterior está sendo somado com o próximo número ímpar para obter o número da sequência, assim:
2 + 3 = 5
5 + 7 = 12
12 + 9 = 21
21 + 11 = 32
Assim, para obtermos o número que representa o valor de (?), basta somar o valor anterior da sequência com o próximo número ímpar, portanto:
32 + 13 = 45

# Programação: Descrição narrativa:

- As instruções podem ser definidas de maneira geral como um conjunto de regras bem definidas com objetivo de realizar algo.
- Na área computacional, uma instrução é definida como uma operação que contenha uma ação a ser executada pelo computador.
- Vale ressaltar que uma instrução executada isoladamente ou em ordem inadequada não faz sentido.
- Para obtermos um resultado final é necessário que as instruções sigam uma sequência lógica e que seja executado todo o bloco de instruções.
- Por exemplo, para fritar um ovo seguimos as seguintes instruções:
1 - Levar a frigideira ao fogo com azeite ou óleo;
2 - Quebrar o ovo;
3 - Colocar na frigideira;
4 - Aguardar até que frite.
* Supondo que somente a instrução 1 e 4 sejam executadas ou que comecemos da instrução 4 para a 1, não faz sentido ou não seria obtido o resultado esperado correto?
* Portanto, as instruções precisam está em uma ordem correta e não devem ser processadas isoladamente.
* Um algoritmo é basicamente uma sequência finita de passos a serem executadas a fim de obter um resultado.
* Assim, temos vários exemplos básicos que podem ser considerados algoritmos, dentre eles podemos citar as receitas culinárias e as operações básicas da matemática.
* A seguir temos o passo a passo para o preparo de um brigadeiro.
 ![image](https://github.com/WillTechWork/Logica-de-Programacao/assets/142448070/c5dd628a-1f34-4255-b7c4-6980b92bbebf)


# Tipos de Dados:

- Os dados podem ser do tipo:
•	Numérico;
•	Literal;
•	Lógico

# Dados Numéricos
- Os dados numéricos representáveis em um computador são divididos em duas classes: INTEIROS e REAIS.
## Dados numéricos Inteiros
Os números inteiros são aqueles que não possuem componentes decimais ou fracionários, podendo ser positivos ou negativos.
## Dados numéricos Reais
Os números reais são aqueles que podem possuir componentes decimais ou
Fracionários, positivos ou negativos.

# Dados Literais
- Os dados literais são sequência de caracteres que podem ser letras, dígitos e símbolos especiais.
- São representados nos algoritmos, pelo delimitador aspas (“) no seu início e término.
## Dados Lógicos
- Os dados lógicos são usados para representar os dois únicos valores lógicos possíveis: Verdadeiro e Falso.
- Seus pares valores podem representados por meio de outros tipos, como:
Sim/ não, 1/0, true/false.
## O que é uma Variável?
- É uma entidade destinada a guardar uma informação;
- Chama-se variável, pois o valor contido nesta varia com o tempo, ou seja, não é um valor fixo;
- O conteúdo de uma variável pode ser alterado, consultado ou apagado quantas vezes forem necessárias no algoritmo;
- Ao alterar o conteúdo de uma variável, a informação anterior é perdida. Ou seja, a variável armazena sempre a última informação recebida;
- Em geral, uma variável possui três atributos: nome, tipo de dado e a informação por ela guardada.
![image](https://github.com/WillTechWork/Logica-de-Programacao/assets/142448070/6c8bf19e-a6df-4106-8851-931c516232c2)

## Regas para declara uma variável:

- Devem ser iniciadas sempre por uma letra;
- Não devem conter caracteres especiais;
- Não devem conter espaços em branco;
- Não devem conter hífen entre os nomes (utilize underline).

## Operadores Aritméticos

- Conjunto de símbolos que representam as operações básicas da matemática como: somar, subtrair, multiplicar, dividir e etc.
- Esses operadores somente poderão ser utilizados entre variáveis com os tipos de dados numéricos inteiros e/ou numéricos reais.
  ![image](https://github.com/WillTechWork/Logica-de-Programacao/assets/142448070/b6995a38-e653-4272-ae8e-d8a8030fd874)

## Obedecem às regras matemáticas comuns:

-	As expressões de dentro de parênteses são sempre resolvidas antes das expressões fora dos parênteses;
-	Quando existe um parêntese dentro de outro, a solução sempre inicia do parêntese mais interno até o mais externo (de dentro para fora);
-	Quando duas ou mais expressões tiverem a mesma prioridade, a solução é sempre iniciada da expressão mais à esquerda até a mais à direita.

## Operadores relacionais:

- Os operadores relacionais são utilizados para comparar valores que estejam ou não armazenados em uma variável.
- Estes operadores sempre irão retornar valores lógicos ( verdadeiro ou falso).
- Os operadores relacionais possuem variações dependendo da linguagem de programação utilizada, mas o conhecimento de símbolos comuns facilita a aprendizagem.
## Descrição	Símbolo:

- Menor que	        <  
- Maior que	        >
- Maior ou igual a 	>=
- Menor ou igual a 	<=
- Igual a           ==
- Diferente de	     !=

## True ou False:

- A > B	Falso / False
- A < B	Verdadeiro / True
- A >= B	Falso / False
- A <= B	Verdadeiro / True
- A == B	Falso / False
- A != B	Verdadeiro / True

## Operadores Lógicos:

Os operadores lógicos têm como função a combinação de expressões de comparação, retornando se o resultado final é verdadeiro ou falso.
Os operadores lógicos são:
- E	And
- Ou	Or
- Não	Not
- Operador E / And
Esse operador exige que as comparações feitas sejam verdadeiras, só assim ele retornará um valor Verdadeiro / True, caso contrário ele retornará Falso / False.
- Operador E / And
 
Esse operador exige que as comparações feitas sejam verdadeiras, só assim ele retornará um valor Verdadeiro / True, caso contrário ele retornará Falso / False.
Normalmente esse operador é representado por ’&&’ nas linguagens de programação, porém como dito pode ocorrer variações na maneira como esse operador é simbolizado.
Exemplo:
## Considere que temos 3 variáveis:
- 1- A = 4
- 2- B = 7
- 3- C = 2
## Os resultados de algumas expressões seriam:
- Expressões	Resultado
A = B	And / E / &&	B > 7	Falso / False
A > C	And / E / &&	C < B	Verdadeiro / True
B > C	And / E / &&	B > A	Verdadeiro / True
C > A	And / E / &&	A < B	Falso / False

OBS: É importante perceber que o operador E / And só retorna um valor Verdadeiro / True, caso as duas comparações que ele está juntando sejam verdadeiras.

## Operador Ou / Or
O operador ‘Ou’ retorna um valor Verdadeiro / True se pelos menos uma das comparações que ele estiver ‘ligando’ retornar um valor Verdadeiro / True, caso as duas comparações forem falsas, ele retorna Falso / False
Em algumas linguagens de programação esse operador é representado por ‘||’ ( Duas barras verticais), porém a representação pode mudar de acordo com a linguagem de programação escolhida.
•	Considere as seguintes variáveis:
•	1 - A = 12
•	2 - B = 2
•	3 - C = 6
•	Os resultados de algumas expressões seriam:

## Expressão	Resultado

A > B	Ou / Or / ||	C > B	Verdadeiro / True
B < C	Ou / Or / ||	C > A	Verdadeiro / False
C!= A	Ou / Or / ||	A!= B	Verdadeiro / True
B!= C	Ou / Or / ||	A <= C	Verdadeiro / True
B > A	Ou / Or / ||	B > C	Falso / False
OBS: Como dito, se ao menos uma comparação retornar um valor verdadeiro, o operador Ou / Or retorna Verdadeiro / True.


## Operador Não / Not: 
O operador Não / Not recebe apenas um valor como entrada, ele inverterá o valor que receber. Se ele receber um valor Falso / False, ele retorna um valor Verdadeiro / True, e vice versa.
Diferente dos outros operadores, ele não junta comparações, ele irá apenas inverter o valor delas.
O operador Não / Not pode ser simbolizado por ‘!’ em algumas linguagens de programação. Perceba que a exclamação (!) junto com o sinal de igual (=) forma o operador ‘Diferente de’.
•	Considere as seguintes variáveis:
1 - A = 3
2 - B = 4

## Expressão	Resultado
A > 0	Não / Not / !	Falso / False
B > 0	Não / Not / !	Falso / False
A > B	Não / Not / !	Verdadeiro/True















