let Array1 = [1, 2, 3];
let Array2 = [4, 5, 6, ...Array1]; // We can write ...Array1 to any position
let Array3 = [...Array2, ...Array1];
console.log(Array3);
