function positiveNumbers(numbers) {
  positives = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positives.push(numbers[i]);
    }
  }
  return positives;
}

console.log(positiveNumbers([3,-1,-2,0,1,2]));