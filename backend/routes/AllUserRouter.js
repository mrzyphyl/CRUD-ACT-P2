const express  = require('express')
const router = express.Router()
const {
    getAllUser,
    delAllUser
} = require('../controller/allUserController')

router.route('/').get(getAllUser)

router.route('/:id').delete(delAllUser)

module.exports = router