import dotenv from 'dotenv'
dotenv.config()

const MONGO_URL = 'mongodb://127.0.0.1:27017/sampleTs'

export const config = {
    mongo: {
        url: MONGO_URL
    }
}