const express = require('express')
require('./db/mongoose')
const cors = require('cors')
const app = express()
const port = 3000

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log(`Server is running in ${port}`)
})
