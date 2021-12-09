const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://Edouard:' + process.env.DB_USER_PASS + '@rs-mern.io1hv.mongodb.net/test',

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));
