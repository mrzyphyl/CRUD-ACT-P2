const express  = require('express')
const router = express.Router()
const {
    getProfessorUser, 
    deltProfessorUser, 
    postProfessorUser, 
    updateProfessorUser
} = require('../controller/professorUserController')
const { getMultiStudentUser } = require('../controller/studentUserController')

router.route('/').get(getProfessorUser).post(postProfessorUser)

router.route('/:id').put(updateProfessorUser).delete(deltProfessorUser)

router.route('/:ids').delete(deltProfessorUser).get(getMultiStudentUser)

module.exports = router