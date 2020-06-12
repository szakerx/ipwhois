const express = require('express')
const app = express()
const port = 2115

app.get('/', (req, res) => res.send('Henlo fren'))

app.listen(port, () => console.log(`App started at port: ${port}`))