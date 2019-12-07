const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
<<<<<<< HEAD
    useNewUrlParser: true,
=======
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
>>>>>>> 1d42c967cb1987d6d4b38f0a1454c8be4224b098
})
