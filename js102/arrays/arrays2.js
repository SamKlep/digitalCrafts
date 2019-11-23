

let names = ["Adam", "Michael", "Szaruga"]

function initials(stuff){
    for (var i=0; i <stuff.length; i++){
        var currentItem = stuff[i];
        let first = currentItem.charAt(0);
        console.log(first)}
}

initials(names)
