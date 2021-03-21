import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
import recipeRoutes from './routes/recipes.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const port = process.env.PORT || 8000

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/recipes', recipeRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.resolve(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

async function start() {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        app.listen(port, () => {
            console.log(`Starting development server: http://localhost:${port}`)
        })
    } catch (error) {
        console.log('Server error', error.message)
        process.exit(1)
    }
}

start()

