const express  = require('express')
const router = express.Router()
const {
    getProfessorUser, 
    deltProfessorUser, 
    postProfessorUser, 
    updateProfessorUser,
    getOneProfessorUser
} = require('../controller/professorUserController')
const { getMultiStudentUser } = require('../controller/studentUserController')

router.route('/').get(getProfessorUser).post(postProfessorUser)

router.route('/:id').put(updateProfessorUser).delete(deltProfessorUser).get(getOneProfessorUser)

router.route('/:ids').delete(deltProfessorUser).get(getMultiStudentUser)

module.exports = router