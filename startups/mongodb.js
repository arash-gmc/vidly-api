const mongoose = require('mongoose');
const winston = require('winston');
const config = require('config')

//const db = config.get('db') 
const db = 'mongodb+srv://arash77gh:ash2lo2shk@cluster0.itb6nsj.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
	.then(()=>winston.info(`connected to ${db}...`))


