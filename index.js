require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT;
const _Routes = require('./src/routes/api');

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Mongodb connected!\nReady to try!'))
  .catch((err) => console.log(err));

const corsOptions = {
  origin: 'http://localhost:3000',
};

// app.use(cors(corsOptions));
app.use(cors());

app.use(express.json());

app.use('/api', _Routes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
