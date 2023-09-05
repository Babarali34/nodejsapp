const express = require('express')
const app = express()

app.set('view engine' , 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))


const tasks = []

app.get('/',(req,res)=>{
     res.render('index')
})


app.get('/tasks',(req,res)=>{
     res.render('tasks',{tasks : tasks})
})

app.post('/task',(req,res)=>{
     const newTask = req.body.task
     tasks.push (newTask)
       res.redirect('/')
   
})


app.listen(4000,()=>{
    console.log("Server is runing");
})