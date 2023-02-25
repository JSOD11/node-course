const fs = require("fs")

fs.writeFileSync("notes.txt", "abcdef")
fs.appendFileSync("notes.txt", " ghijk")