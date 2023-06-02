const express = require('express')
const cors = require('cors')

const chefs = require('./data/chefs.json')
const recipes = require('./data/recipes.json')

const app = express()
//Port
const PORT = process.env.PORT || 5000

// allow cors
app.use(cors())

//Setup route
app.get('/',(req,res)=>{
    res.send('This is Chef Recipe Hunter Server')
})
app.get('/chefs',(req,res)=>{
    res.json(chefs)
})
app.get('/chefs/:id',(req,res)=>{
    const id = req.params.id;
    const selectedChef = chefs.find(chef=>chef.id ===parseInt(id))
    if (!selectedChef) {
        res.json({message:'No chef found'})
    }
    res.json(selectedChef)
})

app.get('/recipes',(req,res)=>{
    res.json(recipes)
})

//listen app
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})