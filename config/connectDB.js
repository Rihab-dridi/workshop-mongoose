const mongoose=require('mongoose')
const connectDB=()=>mongoose.connect('mongodb://localhost/worshop_mongoose', ()=>{
    try {
        console.log('database is connected');
    } catch (error) {
        console.log(error);
    }
})
module.exports=connectDB