import express from 'express'
import availableParts from './routes/part.route.js' 

const PORT = 5000

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/health', (req, res) =>
  res.json({ success: true, message: 'Hello from the homepage' })
)

//Register all your routes
app.use('/parts', availableParts)

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
)
