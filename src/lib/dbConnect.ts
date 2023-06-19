import mongoose from 'mongoose' 

function getDbUri(): string  {
  const dbUri = process.env.DATABASE_URL
   
  if (!dbUri || dbUri.length === 0) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local') 
  }

  return dbUri   
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
declare global {
  var mongoose: any  
}

let cached = global.mongoose 

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null } 
}

async function dbConnect () {
  if (cached.conn) {
    return cached.conn 
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(getDbUri()).then(mongoose => {
      return mongoose 
    }) 
  }
  cached.conn = await cached.promise 
  return cached.conn 
}

export default dbConnect 