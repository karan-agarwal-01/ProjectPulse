const mongoose = require("mongoose");

const MongoDBConnection =  async (url) => {
    return mongoose.connect(url);
}

module.exports =  { MongoDBConnection };