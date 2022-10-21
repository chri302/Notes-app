const add = require('./add')
const read = require('./read')


//get users input
const cmd = process.argv

if (cmd[2] === 'add') {
  // build the object
  note = {
    "id": cmd[3],
    "title": cmd[4],
    "body": cmd[5]
  }

  // get note.txt content
  var oldNote = read()

  // add this newNote to Note.txt
  add(note, oldNote);
}

// Read Notes.txt
if (cmd[2] === 'read')
//import present

var present = require('./present')
 {
  console.log(read());
}

