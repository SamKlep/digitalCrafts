const axios = require('axios')

let counter = 0



function increment() {
    // Send a POST request
    axios.post('app/public', {
    foo: counter++
    console.log('hello')
    })
};