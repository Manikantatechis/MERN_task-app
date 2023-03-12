const dotenv = require('dotenv').config()
const express = require('express')
const Task = require('./models/taskModel')
const mongoose = require('mongoose')
const taskRoutes = require('./routes/taskRoute')



mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`the server is running on port ${PORT}`)
    })

})



const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/api/tasks",taskRoutes)


app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})



const PORT = process.env.PORT || '8000'

