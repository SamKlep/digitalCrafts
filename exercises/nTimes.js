

function callNTimes(number, func) {
    while(number > 0) {
        func();
        number= number - 1;
    }
}


