import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

// Connect to database
mongoose.connect(process.env.mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(`database connection error: ${err}`);
});
db.on('disconnected', () => {
    db.dropDatabase();// only use if error (it drops the database)
    console.log('database disconnected');
});
db.once('open', () => {
    console.log(`database connected to ${db.name} on ${db.host}`);
})