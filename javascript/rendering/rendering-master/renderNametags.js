
function renderNametags(nametags) {
    return `
    <div style="width: 300px;
    height: 200px;
    background-color: blue;">
    <div style="width: 300px;
    height: 100px;
    background-color: white;"</div>
    </div>
    `
}


function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}