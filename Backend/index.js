const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoDBConnection } =  require('../Backend/connection')
const authRoutes = require('./routes/authRoutes');
dotenv.config();

const app = express();
const PORT = process.env.PORT;

MongoDBConnection(`${process.env.MONGO_URI}/AuthDB`).then(() => console.log('MongoDB Connected!'))

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    return res.send('Hello From Server!');
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () =>  console.log(`Server Started on PORT: ${PORT}`));