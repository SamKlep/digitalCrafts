var size = 5;
var i = 0;

// top
for (i = 0; i < size; i++)
    console.log("*");

//middle
for (var j = 0; j < size - 2; j++){
  console.log("\n"); // go to next row
  // middle (2 on sides with size-2 in between)
  console.log("*");
  for (i = 0; i < size-2; i++)
    console.log(" ");
  console.log("*\n"); // goes to new row as well
}

// same as top
for (i = 0; i < size; i++)
    console.log("*");

    var size = 5;
var i = 0;

for (var i = 0; i < size; i++){ // iterates rows
  for (var j = 0; j < size; j++) // iterates * in row
      console.log("*");
  console.log("\n") // moves to new row
}