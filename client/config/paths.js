import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
    src: path.resolve(__dirname, '../src'),
    build: path.resolve(__dirname, '../build'),
    public: path.resolve(__dirname, '../public')
}