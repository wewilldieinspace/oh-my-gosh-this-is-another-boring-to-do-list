require('dotenv').config()
const express = require('express')

const app = express()

const PORT = process.env.PORT || 8000

app.use('/', (req, res) => {
    res.send('AAAAAAAAA!!!!')
})

app.listen(PORT, () => console.log(`server started on ${PORT}`))