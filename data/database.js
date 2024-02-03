const mongoose = require("mongoose");
require("dotenv").config();

const dbName = 'Task';

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log(`Connected to the ${dbName} database`))
  .catch((error) => {
    console.error(`Error connecting to the ${dbName} database: ${error.message}`);
    process.exit(1); // Exit the process if the connection fails
  });

mongoose.connection.on('disconnected', () => {
  console.log(`Disconnected from the ${dbName} database. Reconnecting...`);
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

mongoose.connection.on('error', (error) => {
  console.error(`Error during reconnection to the ${dbName} database: ${error.message}`);
});

module.exports = mongoose.connection;
