// debugger: chrome://inspect

const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  "Your notes..."
}

const addNote = (title, body) => {
  const notes = loadNotes()

  const duplicateNote = notes.find((note) => note.title === title)

  // debugger

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
  
    saveNotes(notes)
    console.log(chalk.green("Note added to database"))
  } else {
    console.log(chalk.red("Note title taken"))
  }
}

const removeNote = (title) => {
  const notes = loadNotes()

  const notesToKeep = notes.filter((note) => note.title != title)

  if (notes.length === notesToKeep.length) {
    console.log(chalk.red("No note with this title exists"))
  } else {
    saveNotes(notesToKeep)
    console.log(chalk.green("Note deleted"))
  }
}

const listNotes = () => {
  const notes = loadNotes()

  console.log(chalk.green("Your notes:\n"))

  notes.forEach(note => console.log(chalk.cyan(note.title + ": " + note.body)))
}

const readNote = (title) => {
  const notes = loadNotes()

  const note = notes.find((note) => note.title === title)

  if (note) {
    console.log("Note with title " + title + ":\n")
    console.log(chalk.cyan(note.body))
  } else {
    console.log(chalk.red("No note with this title exists"))
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}