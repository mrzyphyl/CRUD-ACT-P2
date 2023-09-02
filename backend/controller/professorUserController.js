const asyncHandler = require('express-async-handler')
const professorUser = require('../models/ProfessorUserModel')

//Get Student User
//@access Public
const getProfessorUser = asyncHandler (async (req, res) => {
    const user = await professorUser.find({professorUser})
    res.status(200).json(user)
})

//Get Multi Student User
//@access Public
const getMultiProfessorUser = asyncHandler (async (req, res) => {
    const user = await professorUser.find({professorUser})
    res.status(200).json(user)
})

//Post Student User
//@access Public
const postProfessorUser = asyncHandler (async (req, res) => {
    const { FirstName, LastName, Subjects, Department } = req.body

    if(!FirstName && !LastName){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check if user exist
    const userExist = await professorUser.findOne({FirstName, LastName})

    if(userExist){
        res.status(400)
        throw new Error('User already exists')
    }

    const profUser = await professorUser.create({
        FirstName,
        LastName,
        Subjects,
        Department
    })

    if(profUser){
        res.status(201).json({
            _id: profUser.id,
            FirstName: profUser.FirstName,
            LastName: profUser.LastName,
            Age: profUser.Age,
            Course: profUser.Course,
            Section: profUser.Section
        })
    } else {
        res.status(400)
        throw new Error('Cant register')
    }
})

//Update Student User
//@access Public
const updateProfessorUser = asyncHandler (async (req, res) => {
    const profUser = await professorUser.findById(req.params.id)

    if(!profUser){
        res.status(400)
        throw new Error('User no found')
    }

    const updatedUser = await professorUser.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    
    res.status(200).json(updatedUser)
})

//Delete Student User
//@access Public
const deltProfessorUser = asyncHandler (async (req, res) => {
    const profUser = await professorUser.findById(req.params.id)

    if(!profUser){
        res.status(400)
        throw new Error('User no found')
    }

    await profUser.deleteOne()

    res.status(200).json({ id: req.params.id})
})

//Delete Multiple Student User
//@access Public
const deltMultiProfessorUser = asyncHandler (async (req, res) => {
    const profUser = await professorUser.findById(req.params.id)

    if(!profUser){
        res.status(400)
        throw new Error('User no found')
    }

    await profUser.deleteOne()

    res.status(200).json({ id: req.params.id})
})




module.exports = {
    getProfessorUser,
    getMultiProfessorUser,
    postProfessorUser,
    updateProfessorUser,
    deltProfessorUser,
    deltMultiProfessorUser
}