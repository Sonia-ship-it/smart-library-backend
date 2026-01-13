const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_URL;
mongoose.connect(mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB successfully"))
.catch(error => console.error("Failed to connect to MongoDB:", error));
