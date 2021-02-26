import express from 'express'

const app = express()

app.get("/user", (request, response) =>{
    return response.json({msg: "Hello Darkness"})
})



app.listen(3333, ()=>{console.log('server is up2')})