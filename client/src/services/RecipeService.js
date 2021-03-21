import axios from 'axios'

const BASE_URL = '/api/recipes/'

class RecipeService {
    static async findAll() {
        return await axios.get(BASE_URL)
    }

    static async findOne(id) {
        return await axios.get(BASE_URL + id)
    }

    static async update(body) {
        return await axios.put(BASE_URL + body._id, { recipe: body })
    }

    static async save(body) {
        return await axios.post(BASE_URL, { recipe: body })
    }

    static async delete(id) {
        return await axios.delete(BASE_URL + id)
    }
}

export default RecipeService