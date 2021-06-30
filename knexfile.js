// Update with your config settings.
require('dotenv').config(); // esto va a cargar las varables de entorno
module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DB_URL, // Variables de entorno ---> variables de SO y sirven para guardar secretos,
    migrations: {
      directory: './data/migrations'
    },
    seeds: { directory: './data/seeds'}
  },

  staging:  {
    client: 'pg',
    connection: process.env.DB_URL, // Variables de entorno ---> variables de SO y sirven para guardar secretos,
    migrations: {
      directory: './data/migrations'
    },
    seeds: { directory: './data/seeds'}
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL, // Variables de entorno ---> variables de SO y sirven para guardar secretos,
    migrations: {
      directory: './data/migrations'
    },
    seeds: { directory: './data/seeds'}
  },

};
