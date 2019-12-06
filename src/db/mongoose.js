
// init mongoose
const mongoose = require('mongoose')

// connection
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
})
