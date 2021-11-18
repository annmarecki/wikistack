const express = require("express");
const { Page, User } = require('../models/index.js')
const router = express.Router();
const { main, addPage, wikiPage } = require('../views')

router.get('/', async (req, res, next) => {
// const data = await Page.findAll()
    res.redirect('/wiki')
})
router.post('/', async(req, res, next) =>{

    res.send(wikiPage())
})
router.get('/add', (req, res, next)=>{
    res.send(addPage())
})

module.exports = router