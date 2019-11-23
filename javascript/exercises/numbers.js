

//var size = 3;
//let i;


//for(i = 0; i < size; i++) {
//console.log("*");
//if (size === i){ 
//console.log(""); 
//}
//}
var dimension = 10;
var edge = '*';
var inside = ' ';
var printLine;

for (var i = 1; i <= dimension; i++) {
    if (i === 1 || i === dimension) {
        printline = Array(dimension + 1).join(edge);
    } else {
        printline = edge + Array(dimension - 1).join(inside) + edge;
    }
    console.log(printline);
}




