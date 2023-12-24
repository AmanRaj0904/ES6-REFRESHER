function addSum(...Sonu) {
  let sum = 0;
  for (let i = 0; i < Sonu.length; i++) {
    sum = sum + Sonu[i];
  }
  console.log(sum);
}
addSum(1, 2, 3, 4, 5, 6, 7, 9);
