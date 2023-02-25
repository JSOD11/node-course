const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes.js')

yargs.version('1.1.0')

yargs.command({ // add command
  command: 'add',
  describe: 'add a new note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: (argv) => notes.addNote(argv.title, argv.body)
})

yargs.command({ // remove command
  command: 'remove',
  describe: 'remove a note',
  builder: {
    title: {
      describe: "Title of note to be removed",
      demandOption: true,
      type: "string"
    }
  },
  handler: (argv) => notes.removeNote(argv.title)
})

yargs.command({ // read command
  command: 'read',
  describe: 'read a note',
  builder: {
    title: {
      describe: "Title of note to be read",
      demandOption: true,
      type: "string"
    }
  },
  handler: (argv) => notes.readNote(argv.title)
})

yargs.command({ // list command
  command: 'list',
  describe: 'list notes',
  handler: () => notes.listNotes()
})

console.log()
yargs.parse() // parses arguments
console.log()