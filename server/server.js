require('dotenv').config()
const express = require('express')
const rateLimit = require("express-rate-limit")
const app = express()
const cors = require('cors')
const axios = require('axios')

app.use(express.urlencoded( {extended: true} ))
app.use(express.json())
app.use(cors())

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 3 // limit each IP to 3 requests per windowMs
});

// fetch("https://public-api.tracker.gg/api/v1/apex/standard/profile/`${userInfo.platformSlug}`/`${userInfo.platformUserIdentifier}`", {
//     headers: {
//         'Content-Type': 'application/json',
//         "TRN-Api-Key": TRN-API-KEY
//     },
//     body: JSON.stringify(data)
// })
// .then(response => response.json())
// .then(data => data)

app.post('/user', limiter, async (req, res, next) => {
    try {
        const url = `https://public-api.tracker.gg/v2/apex/standard/profile/${req.body.platform}/${req.body.user}`
    
        const data = await axios.get(url, {
            headers: {
                "TRN-Api-Key": process.env.TRN_API_KEY
            }
        })
        .then(data => res.json(data.data))
        .catch(err => {
            console.log(err)
        })
    } catch (error) {
        next(error)
    }
})

app.listen(3001, ()=> {
    console.log('Server Started')
})