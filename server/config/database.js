require("dotenv").config();
const mongoose =require('mongoose');

// create function to connect mongodb database

const connectdb = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to mongodb at ${conn.Connection.host}`)
    } catch (error) {
        console.log(`mongodb error ${error.message}`);
        process.exit(1)
    }
}

module.exports = connectdb