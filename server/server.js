const express = require('express');

const app = express();

const dbConfig = require('./db')
const treatmentsRoute = require('./routes/treatmentsRoute')
const usersRoute = require('./routes/userRoute')

app.use(express.json())

app.use('/api/treatments', treatmentsRoute)
app.use('/api/users', usersRoute)

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));