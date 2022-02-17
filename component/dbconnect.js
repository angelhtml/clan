
// /lib/dbConnect.js

import mongoose from 'mongoose'

/**
Source: https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js 
**/



/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
/*
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect () {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {


    //cached.promise = mongoose.connect('mongodb+srv://angel:11320809Aa@cluster0.lmyqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(mongoose => {
      cached.promise = mongoose.connect('mongodb://localhost/clan').then(mongoose => {  
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect

*/
function dbConnect(){
  if(mongoose.connect[0]){
    console.log('connected already')
  }
  else{
    //offline
    //mongoose.connect('mongodb://localhost/clan', ()=>{

    mongoose.connect('mongodb+srv://theclan:11320809Aa@cluster0.syzik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', ()=>{
      console.log('your db is connected now')
    })
  }
}
export default dbConnect