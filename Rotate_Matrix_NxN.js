/**
 *
 * 		Rotate Matrix (n * n)
 *
 */

'use strict';

const matrix = [
	[1, 0, 0, 0, 0],
	[2, 1, 0, 0, 0],
	[3, 2, 1, 0, 0],
	[4, 3, 2, 1, 0],
	[5, 4, 3, 2, 1],
];

function rorateMatrixNxN(matrix, clockwise = true) {
	const length = matrix.length;
	const matrixCopy = matrix.map(row => [...row]);

	for (let row = 0; row < length; row++) {
		for (let column = 0; column < length; column++) {
			matrixCopy[row][column] = clockwise
				? matrix[length - 1 - column][row]
				: matrix[column][length - 1 - row];
		}
	}

	return matrixCopy;
}

console.table(rorateMatrixNxN(matrix));
console.table(rorateMatrixNxN(matrix, false));
