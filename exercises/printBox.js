function printBox(width, height) {
  for (i = 0; i < height; i++) {
    let asterisks = "";

    for (j = 0; j < width; j++) {
      if (i == 0 || i == height - 1) {
        asterisks += "*";
      } else if (j == 0 || j == width - 1) {
        asterisks += "*";
      } else {
        asterisks += " ";
      }
    }
    console.log(asterisks);
  }
}

printBox(4, 5);