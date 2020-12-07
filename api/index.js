const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path');

const errorHandler = require('./helpers/errorHandler');

const userRoutes = require('./routes/UserR');
const productRoutes = require('./routes/ProductsR');
const orderRoutes = require('./routes/OrderR');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json());

mongoose.connect(
  "mongodb://sacolao123:sacolao123@cluster0-shard-00-00.ikrby.mongodb.net:27017,cluster0-shard-00-01.ikrby.mongodb.net:27017,cluster0-shard-00-02.ikrby.mongodb.net:27017/sacolao?ssl=true&replicaSet=atlas-7tqj4m-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true }
);

app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/order', orderRoutes);

app.use(errorHandler);

let port = process.env.PORT || 4000;
let host = '0.0.0.0';

app.listen(port, host, () => {
  console.log("Recebendo requests na porta "+port);
});
