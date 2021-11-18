const express = require("express");
const layout = require('./views/layout');
const app = express();
const morgan = require("morgan");
const Wiki = require('./routes/wiki.js')
const Users = require('./routes/users.js')
const { db, Page, User } = require('./models');



app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({ extended: false}));
app.use('/wiki', Wiki)
app.use('/users', Users)

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.get("/", (req, res) => {
    res.send(layout(""));
})

const init = async () => {
    await db.sync();
}

const port = 3000;
app.listen(port, () => {
    console.log(`listening in post ${port}`)
});

init();