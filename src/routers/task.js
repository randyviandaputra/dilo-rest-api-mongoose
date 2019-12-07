
const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/tasks', auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    owner: req.user._id
  })
  
  try {
    await task.save()
    res.status(201).send(task)
  } catch (e) {
    res.status(500).send(e)
  }
})


// /tasks?completed=true
// /tasks?limit=10&skip=20
// /tasks?sortBy=createdAt:desc
router.get('/tasks', auth, async (req, res) => {
  const match = {}
  const sort = {}

  if (req.query.completed) {
    match.completed = req.query.completed === req.query.completed
  }

  if(req.query.sortBy) {
    const parts = req.query.sortBy.split(':')
    // sort['createdAt']
    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
  }

  try {
    // const tasks = await Task.find({})
    // res.status(200).send(tasks)
    await req.user.populate({
      path: 'tasks',
      match,
      options: {
        limit: parseInt(req.query.limit),
        skip: parseInt(req.query.skip),
        sort
      }
    }).execPopulate()
    res.status(200).send(req.user.tasks)
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router