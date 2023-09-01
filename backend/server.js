const express = require('express')
const colors = require('colors')
const { errorHandler } = require('./middleware/ErrorMiddleWare')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/student-user', require('./routes/StudentUserRouter'))
app.use('/api/professor-user', require('./routes/ProfessorUserRouter'))
app.use('/api/users', require('./routes/AllUserRouter'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))