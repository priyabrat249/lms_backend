const mongoose = require('mongoose');

const connectDb = () => {
  const dbUri = process.env.DB_URI + '/'+process.env.DB_NAME; // Ensure this is properly set
  return mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = { connectDb };