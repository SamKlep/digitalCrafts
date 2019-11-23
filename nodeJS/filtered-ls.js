const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
    if (err) {
        console.log(err)
    } else {
        console.log(files)
    }

})