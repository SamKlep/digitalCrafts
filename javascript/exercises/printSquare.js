function printSquare(size) {
  for (i = 0; i < size; i++) {
    let asterisks = "";
    for (j = 0; j < size; j++) {
      asterisks += "*";
    }
    console.log(asterisks);
  }
}

printSquare(5);