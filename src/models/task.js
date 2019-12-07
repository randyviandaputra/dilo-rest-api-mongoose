
const mongoose = require('mongoose')

<<<<<<< HEAD
const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true
  }, 
  completed: {
    type: Boolean,
    default: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, {
  timestamps: true
})

const Task = mongoose.model('Task', taskSchema)


module.exports = Task
=======
const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

module.exports = Task
>>>>>>> 1d42c967cb1987d6d4b38f0a1454c8be4224b098
