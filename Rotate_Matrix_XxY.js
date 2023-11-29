/**
 *
 * 		Rotate Matrix (x * y)
 *
 */

'use strict';

const matrix = [
	[0, 0, 0, 1],
	[0, 0, 1, 2],
	[0, 1, 2, 3],
	[1, 2, 3, 4],
	[2, 3, 4, 5],
	[3, 4, 5, 6],
	[4, 5, 6, 7],
];

function rotateMatrixXxY(matrix, clockwise = true) {
	const width = matrix[0].length;
	const height = matrix.length;
	const rotatedMatrix = [];

	for (let row = 0; row < width; row++) {
		rotatedMatrix[row] = [];

		for (let column = 0; column < height; column++) {
			clockwise
				? rotatedMatrix[row].unshift(matrix[column][row])
				: rotatedMatrix[row].push(matrix[column][row]);
		}
	}

	return rotatedMatrix;
}

console.table(rotateMatrixXxY(matrix));
console.table(rotateMatrixXxY(matrix, false));
