const express  = require('express')
const router = express.Router()
const {
    getStudentUser, 
    deltStudentUser, 
    postStudentUser, 
    updateStudentUser
} = require('../controller/studentUserController')

router.route('/').get(getStudentUser).post(postStudentUser)

router.route('/:id').put(updateStudentUser).delete(deltStudentUser)

router.route('/:ids').delete(deltStudentUser)

module.exports = router

