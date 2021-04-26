/* INTERPRETAÇÃO 1 */

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log (minhaFuncao(2))
console.log (minhaFuncao(10))

/* a - Será retornado o valor declarado no console.log * 5, ou seja, 10 e 50. */
/* b - Nada apareceria, pois o console.log é o comando responsável pela impressão das informações no console.*/

/* INTERPRETAÇÃO 2 */

let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}

outraFuncao(arrayDeNomes)