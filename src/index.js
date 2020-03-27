require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userRouter = require('./api/routes/user.route');

const config = require('./config/');

const db = require('./db/');

const app = express();

app.use(express.json());
app.use(morgan('combined'));
app.use(cors());

app.use(userRouter);

const server = app.listen(config.server.port, () => {
  console.log(`Server runing on port ${config.server.port}`);
});

db();
