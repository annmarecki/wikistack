const express = require("express");
const router = express.Router();
//const client = require("../db");

router.get('/', (req, res, next) => {

    res.send('got to Get /users/')
})
router.post('/', (req, res, next) =>{
    res.send('got to POST /users/')
})
router.get('/add', (req, res, next)=>{
    res.send('got to POST /users/add')
})






module.exports = router