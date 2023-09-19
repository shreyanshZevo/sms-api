const express = require('express')
const cors = require('cors')
const app = express();
const authRouter = require('./routes/authRouter')
app.use(cors())
app.use(express.json());
app.use('/', authRouter)
app.get('/get', (req, res)=>{
    res.send("Hello")
})
app.listen(8080, ()=>console.log("app is currently live on port 8080"))