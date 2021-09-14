const mongoose=require('mongoose')
const connectDB=require('./config/connectDB')
const CONTACTS = require('./Models/CONTACTS')
connectDB()


//CRUD 

//CREATE 
// const contact = new CONTACTS ({
//     name:'ahmed',
//     email:'ahmed@gmail.com'
// })

// contact.save(()=>{
//     try {
//         console.log('the user has been added');
//     } catch (error) {
//         console.log(error);
//     }
// })

//READ
// CONTACTS.find({name:'Rihab'},(err,data)=>{
//     try {
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// })

//update
CONTACTS.findOneAndUpdate({name:'Rihab'},{email:'dridi@gmail.com'} ,(err,data)=>{
    try {
        console.log(data, CONTACTS);
    } catch (error) {
        console.log(error);
    }
})

//delete
CONTACTS.findByIdAndDelete("614085c4209c7f358a73ea73",(error,data)=>{
    try {
        console.log('the use has been delted');
    } catch (error) {
        console.log(error);
    }
})
