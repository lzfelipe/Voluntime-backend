module.exports = {

    development: {
      client: 'mysql2',
      connection: {
        host : 'mysql.host.com',
        user : 'user',
        password : 'pass',
        database : 'voluntime',
        port: '41890'
      },
      pool: { min: 0, max: 7 },
      migrations: {
        tableName: 'knex_migrations',
        directory: `${__dirname}/src/database/migrations`
      },
  
      seeds: {
        directory: `${__dirname}/src/database/seeds`
      }
    
    },
  };
  