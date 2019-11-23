
function renderStudents(students) {
    return `
        <div class="m-3 p-3 w-25 style="background-color: ${student.isPresent ? "Lightgreen" : "red" };">
        <h1>${student.name}</h1>
        <p>${student.isPresent ? "Present" : "Absent:"}</p>
    </div>
    `
};
return `
    <div class="text-center mt-5 d-flex flex-column 
`

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}