// const fs=require('fs')
// const path=require('path')
const http = require("http");
const parser=require('body-parser')
const express=require('express')
const bodyParser = require("body-parser");
const app=express();

// const zlip=require('zlib')
// const gzip=zlip.createGzip()
// const readStream=fs.createReadStream((path.resolve(__dirname,'199 - How Does a Transaction Work.mp4')))
// const writeStream=fs.createWriteStream((path.resolve(__dirname,'199 - How Does a Transaction Work4.mp4')))
// readStream.on("data", (chunk)=>{
//     writeStream.write(chunk)
// })

// readStream.on('end',()=>{
//     writeStream.end()
// })
//
app.use(bodyParser.json())
app.get('/',(req,res)=>{
  res.send(req.body)
})

app.listen(5000, () => {});
