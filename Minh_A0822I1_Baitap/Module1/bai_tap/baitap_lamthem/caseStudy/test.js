let numerators = [5, 2, 5, 1, 3, 9];
let denominators = [6, 3, 4, 8, 5, 6];
let max = (numerators[0] / denominators[0])
let index = 0;

function maxFraction(arr1, arr2, max, index) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if ((arr1[i] / arr2[i]) > max) {
                max = (arr1[i] / arr2[i]);
                index = [i];
            }
        }
    }console.log(index + " " + max)
}

maxFraction(numerators, denominators, max, index)