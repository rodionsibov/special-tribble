require('dotenv').config() 
const express = require('express')
const app = express()
const port = 3000
const querystring = require('querystring');
const fetch = require('node-fetch')

const apiUrl = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = process.env.API_KEY;

app.get('/', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    let query = req.query
    query.appid = apiKey
    const qs = querystring.stringify(query)
    const resFetch = await fetch(`${apiUrl}?${qs}`)
    const data = await resFetch.json()
    res.send(data)
    console.log(data);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})