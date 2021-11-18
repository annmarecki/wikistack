const express = require("express");
const layout = require('./views/layout');
const app = express();
const morgan = require("morgan");
app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({ extended: false}));



app.get("/", (req, res) => {
    res.send(layout(""));
})

const port = 3000;
app.listen(port, () => {
    console.log(`listening in post ${port}`)
});