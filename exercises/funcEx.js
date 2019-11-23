
var arr = [0,1,2,3,4,5,6,-8];

var newArr = arr.filter(function(element){
    return element > 0;
});

console.log(newArr);