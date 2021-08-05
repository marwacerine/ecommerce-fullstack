require("dotenv").config();
const express = require("express");
//const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes= require('./router/productRoutes');

connectDB();

const app = express();

app.use(express.json());
//app.use(cors());
app.use('/api/products',productRoutes);

// const corsOptions = {
//     origin: 'http://localhost:3000/',
//     optionsSuccessStatus: 200
//   }

const PORT = process.env.PORT || 5000;
// app.get('/products/:id', cors(corsOptions), function (req, res, next) {
//     res.json({msg: 'This is CORS-enabled for only example.com.'})
//   })

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

