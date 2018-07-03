const express = require('express')
var bodyParser = require('body-parser');
const router = express.Router()
router.use(bodyParser.json())
const { login } = require('../controller.js')
    //const { comment } = require('../controller.js')



router.post('/login', login)
    //router.post('/comment', comment)


// router.get('/', signin)

module.exports = router