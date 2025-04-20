const express = require('express');
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    return res.send('Hello From Server!');
});

app.listen(PORT, () =>  console.log(`Server Started on PORT: ${PORT}`));