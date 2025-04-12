const express = require("express")
const app= express()
const path = require("path")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set("view engine", "ejs")
app.set("views", path.join(__dirname,"views"))  
app.use(express.static(path.join(__dirname,"public"))) 


let score = function(att, wro){
    let total= 300;
    let positive = att*4;
    let negative= wro*(-1);
    let fin = positive + negative;
    return fin
}

let accuracy= function (att){
    let total= 75;
    accurate = (att/75)
    return accurate*100
}





app.get("/",(req,res)=>{

    res.render("home")
})
app.post("/",(req,res)=>{
    const {attempt, wrong, naam}= req.body
    const final = score(attempt,wrong)
    const accur = accuracy(attempt)
    res.render("result",{ final, accur,naam, attempt, wrong })
})


app.listen(5105)