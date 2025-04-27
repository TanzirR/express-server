import express from "express"

const app = express()

const PORT = 8000

let data = [{
    name: "Tanzir"
}]

// //Middleware
app.use(express.json()) //send input in json format

//Web endpoints
app.get('/', (req,res) =>{
    res.send("<h1>Homepage</h1>")
    res.sendStatus(200)
})

app.get('/dashboard', (req, res) =>{
    res.send("<h1>Dashboard</h1>")
})

//API endpoints 
//CRUD-method: create-post read-get update-put delete-delete

app.get('/api/data', (req,res)=>{
    res.send(JSON.stringify(data))
})

app.post('/api/data', (req,res)=>{
    const newEntry = req.body //for post method
    data.push(newEntry)
    console.log(data)
    res.sendStatus(201)
})

app.delete("/api/data", (req,res)=>{
    data.pop()
    console.log(data)
    res.sendStatus(203)
})


app.listen(PORT, () =>{`The server is listening on ${PORT}`})