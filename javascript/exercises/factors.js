function factors(num) {
  factorsArray = [];
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      factorsArray.push(i);
    }
  }

  return factorsArray;
}

console.log(factors(12));