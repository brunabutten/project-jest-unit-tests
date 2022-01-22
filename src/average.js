/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

/* REQUISITO 01 */

const average = (ar) => {
  let soma = 0;
  let media = 0;
  let tamanho = ar.length;
  if (tamanho === 0) media = undefined;

  ar.forEach((num) => {
    if (typeof num !== 'number') media = undefined;
    else if (media !== undefined) {
      soma += num;
      media = Math.round(soma / tamanho);
    }
  });
  return media;
};

console.log(average([12, 25, '42']));

module.exports = average;
