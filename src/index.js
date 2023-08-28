// src/app.js
const express = require('express');
const customerRoutes = require('./routes/customer');

const app = express();

app.use(express.json());

app.use('/api', customerRoutes);
const PORT = process.env.PORT || 3000; // You can change the port as needed

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// module.exports = app;