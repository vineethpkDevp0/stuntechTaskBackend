const express=require('express')

const cors=require('cors')

const dataServices=require('./service/dataService')

const app=express()

app.use(cors({
    origin:'http://localhost:3000'
}))

app.use(express.json())

app.listen(5000,()=>console.log("port lisetning to port 5000"))




app.get('/details',(req,res)=>{
    dataServices.details()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})




app.post('/search',(req,res)=>{
    console.log(req.body.search);
    dataServices.search(req.body.search)
    .then((result)=>{
        console.log('heloo'+result);
        res.status(200).json(result)
        
    })
})
