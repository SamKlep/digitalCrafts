
function renderRectangle(myrectangle) {
    return `
        <div style="width: ${myrectangle.width}px;
        height: ${myrectangle.height}px;
        background-color: ${myrectangle.color};"></div>
    `
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}