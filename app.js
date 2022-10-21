const add = require('./add')
const read = require('./read')
const del = require('./del')
const update = require('./update');


const cmd = process.argv

if (cmd[2] === 'add') {
  
  note = {
    "id": cmd[3],
    "title": cmd[4],
    "body": cmd[5]
  }
  var oldNote = read()

  add(note, oldNote);
}
if (cmd[2] === 'read')

var present = require('./present')
 {
  console.log(read());
}
if (cmd[2] === "delete") {

  const id = cmd[3]
  const oldNote = read ()
  del(id, oldNote)
  console.log(del)
}
if (cmd[2] === 'update') {
  let note = {
    id: cmd[3],
    title: cmd[4],
    body: cmd [5]
  }

const newNote = read ()
update(note, newNote)
console.log(update)

}