
var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6]
  ];

console.log(arr.sort(function (a, b){
    let sum1 = a;
    let sum2 = b;
    
    a.forEach(function(element){
        sum1 += element;
    });
    b.forEach(function(element){
        sum2 += element;
    });
    
    return sum1 - sum2;
}))

