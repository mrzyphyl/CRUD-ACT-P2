const express  = require('express')
const router = express.Router()
const {
    getProfessorUser, 
    deltProfessorUser, 
    postProfessorUser, 
    updateProfessorUser
} = require('../controller/professorUserController')

router.route('/').get(getProfessorUser).post(postProfessorUser)

router.route('/:id').put(updateProfessorUser).delete(deltProfessorUser)

router.route('/:ids').delete(deltProfessorUser)

module.exports = router