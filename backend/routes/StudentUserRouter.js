const express  = require('express')
const router = express.Router()
const {
    getStudentUser, 
    deltStudentUser, 
    postStudentUser, 
    updateStudentUser,
    getMultiStudentUser,
    getOneStudentUser
} = require('../controller/studentUserController')

router.route('/').get(getStudentUser).post(postStudentUser)

router.route('/:id').put(updateStudentUser).delete(deltStudentUser).get(getOneStudentUser)

router.route('/:ids').delete(deltStudentUser).get(getMultiStudentUser)

module.exports = router

