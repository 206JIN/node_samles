// expressモジュール読み込み
const express = require('express')
// dotenvモジュール読み込み
const dotenv = require('dotenv')

// dotenvの設定読み込み
dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

console.log(HOST)
console.log(PORT)

const app = express()

app.get('/',(req,res) => {
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    res.send('Hello!!!!!')
})

app.listen(PORT,HOST,() =>{
    console.log(HOST)
    console.log(PORT)
    console.log('Wait...')
})