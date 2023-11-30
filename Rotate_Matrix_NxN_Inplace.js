/**
 *
 * 		Rotate Matrix (n * n) Inplace
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

function rotateMatrixNxNInplace(matrix, clockwise = true) {
	const length = matrix.length - 1;
	const matrixCopy = matrix.map(row => [...row]);

	for (let i = 0; i < Math.floor((length + 1) / 2); i++) {
		for (let j = i; j < length - i; j++) {
			let temp = matrixCopy[i][j];

			if (clockwise) {
				matrixCopy[i][j] = matrixCopy[length - j][i];
				matrixCopy[length - j][i] = matrixCopy[length - i][length - j];
				matrixCopy[length - i][length - j] = matrixCopy[j][length - i];
				matrixCopy[j][length - i] = temp;
			} else {
				matrixCopy[i][j] = matrixCopy[j][length - i];
				matrixCopy[j][length - i] = matrixCopy[length - i][length - j];
				matrixCopy[length - i][length - j] = matrixCopy[length - j][i];
				matrixCopy[length - j][i] = temp;
			}
		}
	}

	return matrixCopy;
}

console.table(rotateMatrixNxNInplace(matrix));
console.table(rotateMatrixNxNInplace(matrix, false));
