require('dotenv').config()

module.exports = {
    api:{
        port: process.env.API_PORT,
        host: process.env.API_HOST,
    },
    db:{
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME
    }
}