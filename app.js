const express = require('express');
const cors = require('cors');
const PORT = 5000;

const app = express()
app.use(cors());
app.get('/', (req, res) => {
    res.json([
        {
            id: "1",
            title: "Bookes",
        },
        {
            id: "2",
            title: "Movies", 
        },
        {
            id: "3",
            title: "Games" 
        }
    ])
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}...`)
})