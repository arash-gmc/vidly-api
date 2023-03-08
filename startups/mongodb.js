const mongoose = require('mongoose');
const winston = require('winston');
const config = require('config')

const db = config.get('db') 
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
	.then(()=>winston.info(`connected to databse...`))
	.catch(e=>{throw Error('db connection error: ',e)})


