import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then( ()=>{
    app.on('error',(error)=>{
            console.log("Error",error);
            throw error
        });
    app.listen(port|| 8000,()=>{
        console.log(`Server is listening  at http://localhost:${port}`)
    })
})
.catch((err)=>{
    console.log("Mongo Db connection failed !!--index file")

})

