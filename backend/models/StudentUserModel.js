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
    Age: {
        type: String,
        required: [true, 'Please add your Age']
    },
    Course: {
        type: String,
        required: [true, 'Please add your Course']
    },
    Section: {
        type: String,
        required: [true, 'Please add your Course']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('StudentUser', userSchema)