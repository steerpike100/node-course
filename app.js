const chalk = require("chalk");
const { demandOption } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes.js");

//Customize yargs version
yargs.version("1.1.0");

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
    console.log("Removing the note");
  },
});

//Create List command
yargs.command({
  command: "list",
  describe: "list the notes",
  handler: function () {
    notes.listNotes();
  },
});

//Create Read command
yargs.command({
  command: "read",
  describe: "reading a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();

//add, remove, read, list
//console.log(yargs.argv);
