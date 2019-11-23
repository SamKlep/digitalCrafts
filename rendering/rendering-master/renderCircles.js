
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    var mycircle= ""
   
    for (var i=0;i < circles.length; i++){
        mycircle +=`<div style="background-color:${circles[i].color};height:${circles[i].radius}px;width:${circles[i].radius}px;border-radius:${circles[i].radius}px"></div>`
   
    }

    // mycircle += ''
    // mycircle = mycircle + ''

    return `
        <div class="text-center mt-5">
            ${mycircle}
        </div>
    `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}