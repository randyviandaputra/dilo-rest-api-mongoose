
// init mongoose
const mongoose = require('mongoose')
// init validator
// const validator = require('validator')
// connection
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
})

// create model 
// const User = mongoose.model('User', {
//   name: {
//     type: String
//   },
//   age: {
//     type: Number
//   }
// })

// const me = new User({
//   name: 'Randy',
//   age: 21
// })

me.save().then(() => {
  console.log(me)
}).catch((error) => {
  console.log('Error', error)
})

// const Task = mongoose.model('Task', {
//   description: {
//     type: String
//   },
//   completed: {
//     type: Boolean
//   }
// })

// const task = new Task({
//   description: 'Learn MongoDB',
//   completed: false
// })

// task.save().then(() => {
//   console.log(task)
// }).catch((error) => {
//   console.log(error)
// })

// create model User
const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email tidak valid');
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('umur harus positif number');
      }
    }
  }
})

const me = new User({
  name: '       Vianda         ',
  email: '     VIANDA@GMAIL.COM    ',
  password: ' 123456 '
  // age: -21
})

me.save().then(() => {
  console.log(me)
}).catch((error) => {
  console.log('Error', error)
})