import express from 'express'
import cors from 'cors'

import userRoutes from './routes/users.routes.js'
import authRoutes from './routes/auth.routes.js'

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/auth', authRoutes)
app.use('/api', userRoutes)

app.listen(PORT, console.log(`🔥 Server On http://localhost:${PORT}`))
