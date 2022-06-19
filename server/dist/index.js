"use strict";
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { User } = require('./models');
const router = require('./router');
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use('/api', router);
const PORT = process.env.PORT || 8000;
// app.use('/', async (req, res) => {})
app.listen(PORT, () => console.log(`server started on ${PORT}`));
//# sourceMappingURL=index.js.map