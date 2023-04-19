const express = require('express');
const mongoose = require('mongoose');
const app = express();

const dbConnect = 'mongodb+srv://KujengA4222:rxcx6NpjCK05sRWk@cluster0.lhyk1vq.mongodb.net/?retryWrites=true&w=majority'

async function connect(){
  try{
    await mongoose.connect(dbConnect);
    console.log('Connected To MongoDB');
  } catch(error) {
    console.log('Error')
  }
}


connect();

app.listen(2023, () => {
  console.log('Server is Running On Port 2023')
})
