var config = module.exports
var PRODUCTION = process.env.NODE_ENV === 'production';
var TEST = process.env.NODE_ENV === 'test';
var DEVELOPEMENT = process.env.NODE_ENV === 'development'
import dbConnect from './dbConnect';
import express from 'express';
const app = express()
config.express = {
  port: process.env.PORT || 3000,
  ip: 'localhost'
}

//db.sequelize.sync();

if (PRODUCTION) {
  config.express.ip = '127.0.0.1';
} else if (TEST) {
  config.express.ip = '127.0.0.1';
} else if (DEVELOPEMENT) {
  config.express.ip = '127.0.0.1';
}
// config.db same deal
// app.use(dbConnect)
// config.email etc
// config.log