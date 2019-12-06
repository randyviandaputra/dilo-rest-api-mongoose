
// init express
const express = require('express')

// call mongoose
require('./db/mongoose')

// call model user & task
const User = require('./model/user')
const Task = require('./model/task')

const app = express()

// use json
app.use(express.json())

// endpoint

// ==USER==
// create user
// app.post('/users', (req, res) => {
//   const user = new User(req.body)

//   user.save().then(() => {
//     res.status(201).send(user)
//   }).catch((e) => {
//     res.status(400).send(e)
//   })
// })

// async await
app.post('/users', async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    res.status(201).send(user)
  } catch (e) {
    res.status(400).send(e)
  }
})

// read user
app.get('/users', async (req, res) => {
  try {
    const users = await User.find({})
    res.status(201).send(users)
  } catch (e) {
    res.status(500).send(e)
  }
})

// read user by id
app.get('/users/:id', (req, res) => {
  const _id = req.params.id
  User.findById(_id).then((user) => {
    if (!user) {
      return res.status(404).send()
    }
    res.status(201).send(user)
  }).catch((e) => {
    res.status(500).send(e)
  })
})

// ==TASK==
// create task
app.post('/tasks', (req, res) => {
  const task = new Task(req.body)

  task.save().then(() => {
    res.status(201).send(task)
  }).catch((e) => {
    res.status(400).send(e)
  })
})

// read task
app.get('/tasks', (req, res) => {
  Task.find({}).then((tasks) => {
    res.status(201).send(tasks)
  }).catch((e) => {
    res.status(500).send(e)
  })
})

// read task by id
app.get('/tasks/:id', (req, res) => {
  const _id = req.params.id
  Task.findById(_id).then((task) => {
    if (!task) {
      return res.status(404).send()
    }
    res.status(201).send(task)
  }).catch((e) => {
    res.status(500).send(e)
  })
})

const port = 3000
app.listen(port, () => {
  console.log('server is running in port ' + port)
})