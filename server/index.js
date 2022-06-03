require('dotenv').config()
const express = require('express')
const { User } = require('./models')

const app = express()

const PORT = process.env.PORT || 8000


app.use('/', async (req, res) => {
    const user = await User.findAll()
    res.send(JSON.stringify(user))
})

app.listen(PORT, () => console.log(`server started on ${PORT}`))