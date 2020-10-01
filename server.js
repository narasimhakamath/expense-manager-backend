const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');

dotenv.config({path: './configurations/configuration.env'});

const connectDB = require('./configurations/database');
connectDB();

const app = express();
app.use(express.json());

if(process.env.ENVIRONMENT === "development")
	app.use(morgan('dev'));


// Mounting the routes.
app.use('/api/users', require('./routes/users'));


const PORT = process.env.PORT || 5000;
console.clear();
const server = app.listen(PORT, console.log(`Server is running in the environment: ${process.env.ENVIRONMENT} on the port: ${PORT}`.yellow.bold));

process.on('unhandledRejection', (error, promise) => {
	console.log(`Error: ${error.message}`.red.bold);
	server.close(() => process.exit(1));
});