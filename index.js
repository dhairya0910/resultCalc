const express = require("express")
const app= express()
const path = require("path")
const mongoose = require('mongoose');
// const user = require("./models/userModel")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set("view engine", "ejs")
app.set("views", path.join(__dirname,"views"))  
app.use(express.static(path.join(__dirname,"public"))) 

// main()
// .then(()=>{
//     console.log("connection si hai")
// })
// main().catch(err=>console.log(err));

// async function main(){
//     await mongoose.connect('mongodb://127.0.0.1:27017/mainsResult')
//}






let score = function(att, wro){
    let total= 300;
    let positive = (att-wro)*4;
    let negative= wro*(-1);
    let fin = positive + negative;
    return fin
}

let accuracy= function (att, wro){
    let total= 75;
    si = (att-wro)
    accurate = (si/att)

    return accurate*100
}





app.get("/",(req,res)=>{

    res.render("home")
})
app.post("/", async (req,res)=>{
    const {attempt, wrong, naam}= req.body
    const final = score(attempt,wrong)
    const accur = accuracy(attempt,wrong)

    try {
        let constUser=new user({
            naam,
            attempt,
            wrong,
            score: final,
            accuray: accur
        })
        await constUser.save()
        console.log("User Saved")
    }catch(err){
        console.log(err)
    }
    res.render("result",{ final, accur,naam, attempt, wrong })
})


app.listen(5105)