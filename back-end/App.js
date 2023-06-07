const express = require('express')
const axios = require('axios');
require('dotenv').config();
const cors = require('cors')
const app = express() 
const Transaction = require('./components/Transactionchema')
// const link = 'https://example.com'; // Replace with your link
// app.js

const connectDB = require('./components/Mongoose');

connectDB();

// const link ='https://api.wazirx.com/api/v2/tickers'
// const needed = []
// axios.get(link)
//   .then(response => {
//     const data = response.data;
//     // console.log();
//     const inr = Object.keys(data)

//     for (let index = 0; index < inr.length; index++) {
//         if(inr[index].slice(-3) === 'inr')
//         needed.push(inr[index])
//     }
//      // Process or display the retrieved data as needed
//     //  console.log(needed)
//      for(let index = 0;index<needed.length;index++){
//         // console.log(data[needed[index]])
//         const newtransaction = new Transaction(data[needed[index]])
//         newtransaction.save()
//         .then(()=>console.log('successful'))
//         .catch((er)=>console.log('error'))
//      }
//   })
//   .catch(error => {
//     console.error(error);
//   });
app.use(cors())
app.get('/data/:id', (req, res) => {
    const id = req.params.id; // Access the value of the 'id' parameter in the route
    // Use the 'id' to fetch the corresponding data from the database or any other data source
  
    // Example response
  Transaction.find({ name: `${id}/INR` }).then(users => {

     res.json(users)
  });
  });

// Transaction.find({ name: 'PEPE/INR' }).then(users => {

//       console.log('Users found:', users);
//   });

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`)
})