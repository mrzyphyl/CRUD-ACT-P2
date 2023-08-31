const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    FirstName: {
        type: String,
        required: [true, 'Please add your First Name']
    },
    LastName: {
        type: String,
        required: [true, 'Please add your Last Name']
    },
    Subjects: {
        type: String,
        required: [true, 'Please add your Age']
    },
    Department: {
        type: String,
        required: [true, 'Please add your Course']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('ProfessorUser', userSchema)