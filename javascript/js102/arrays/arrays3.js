
let numbers = ["0", "1", "0", "1", "1", "1", "0", "0"]
    
    function search(haystack, needle){
        var foundIndex =-1;

        for (var i=0; i <haystack.length; i++){
            var currentItem = haystack[i];
            if ( currentItem == needle){
                foundIndex=i;
            }
        }

        return foundIndex;
    }
console.log(search(numbers, "1"))



