const express = require('express');
const routes = require('./routes');


// import sequelize connection
const Sequilize = require('sequelize');
//connect dotenv method
require('dotenv').config();
// create connection the database
const sequilize = new Sequilize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3001
});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = sequilize;