let epress = require("express")
let app = epress();
let port = 3001;

app.use(epress.urlencoded({ extended : true}))
app.use(epress.json())
app.get("/register",(req, res)=>{
    let {username, password} = req.query;
    res.send(`Standard get response. Welcome ${username}!`)

})
app.post("/register",(req, res)=>{
    let {username, password} = req.body;
    console.log(username, password)
    res.send(`Standard post response. Welcome ${username}`)

})
app.listen(port, ()=>{
    console.log(`Listening By port ${port}....`)
})