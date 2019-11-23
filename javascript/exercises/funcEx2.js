var arr = [1,2,3,4,5,6,7,8];

var newArr = arr.filter(function(element){
    return (element % 2) == 0;
});

console.log(newArr);