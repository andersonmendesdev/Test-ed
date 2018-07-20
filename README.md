# Test

## Problema 1: 
(Tempo médio:  5 minutos, Pontos: 10)
### O arquivo “lista_palavras_desordenada.txt” contem 109.583 palavras. Quantas palavras desta lista terminam com a letra ‘a’.

(a)	1.450
(b)	6.580
(c)	7.935
(d)	8.529
(e)	16.582

## Problema 2: 
(Tempo médio: 15 minutos, Pontos 20)
Convertendo cada letra de uma palavra no número correspondendo a posição no alfabeto e adicionando os valores, nós obtemos o valor de uma palavra. Por exemplo, o valor da palavra SKY é 19 + 11 + 25 = 55. O arquivo “lista_palabras_desordenada.txt” contem 109.583 palavras. Ao calcular o valor de cada uma destas palavras, quantas delas são múltiplas de 5?

(a)	19.465
(b)	21.867
(c)	30.257
(d)	32.950
(e)	45.978

## Problema 3: 
(Tempo Médio: 40 minutos, Pontos: 60)
O arquivo “números.txt” contem 2500 números aleatórios entre 1 e 99.9999. Uma árvore binária de busca é uma árvore com dois nós filhos cujos valores da subárvore da esquerda são todos menores que o valor do nó raiz e os valores da subárvore da direita são sempre maiores que o valor do nó raiz.

**A classe abaixo pode ser utilizada para representar uma árvore binária de busca.**

class Tree {
int value;
Tree left;
Tree right;
}
 
Os números abaixo:
12
4
7
54
23

O caminho para o nó 23 é 12 -> 7 -> 54 -> 23. O caminho para o nó 4 é 12 -> 4. O caminho para o nó 12 é 12. O arquivo “números.txt” contem 2500 números aleatórios. Organizá-los em uma árvore binária de busca, encontrar o caminho até o nó com valor 83.099 e somar todos os números do caminho. 
Essa somatória tem o valor:

(a)	583.578
(b)	678.140
(c)	980.578
(d)	1.015.243
(e)	1.528.124

## Problema 4 - Desafio: 
(Tempo médio: 120 minutos, Pontos: 500)
Começando do topo do triangulo abaixo e movendo para números adjacentes nas linhas de baixo somando os números, a maior soma possível é 23.

3
7 4
2 4 6
8 5 9 3


Marcado em vermelho acima 3 + 7 + 4 + 9 = 23.
Qualquer outro caminho resultará em uma soma menor, exemplo: 3 + 4 + 6 + 9 = 22.
**O arquivo “triangulo.txt” contem um triangulo com 100 linhas. Encontre a maior soma deste triangulo.**
*OBSERVAÇÃO: Não é possível tentar somar todas as rotas possíveis pois existem 299 rotas possíveis. Se você pudesse chegar um trilhão (1012) rotas por segundo, levaria mais de 20 bilhões de anos para checar todas. Existe um algoritmo eficiente para resolver.*

(a)	2.256
(b)	5.480
(c)	7.273
(d)	8.528
(e)	9.280



