const asyncHandler = require('express-async-handler')
const professorUser = require('../models/ProfessorUserModel')
const studentUser = require('../models/StudentUserModel')

const getAllUser = asyncHandler (async (req, res) => {
    const profUser = await professorUser.find({professorUser})
    const studUser = await studentUser.find({studentUser})
    res.status(200).json({profUser, studUser})
})

const delAllUser = asyncHandler (async (req, res) => {
    const profUser = await professorUser.find({professorUser})
    const studUser = await studentUser.find({studentUser})

    await profUser.deleteOne()
    await studUser.deleteOne()

    res.status(200).json('All users has been deleted')
})

module.exports = {
    getAllUser,
    delAllUser
}