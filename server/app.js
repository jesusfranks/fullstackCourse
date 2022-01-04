const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const postRouter = require('./routes/Posts');
const cors = require('cors');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

//Declare routes
app.use('/', indexRouter);
app.use('/posts', postRouter);

module.exports = app;
