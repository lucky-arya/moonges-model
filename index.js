import express from "express"

const app = express()
const port= 3000
app.listen(process.env.PORT || port , ()=>{
    console.log(`App is listening on : ${port}`)
})