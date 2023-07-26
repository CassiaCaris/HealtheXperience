const { defineConfig } = require("cypress");

const { Pool } = require('pg')

const dbConfig = {
  host: 'silly.db.elephantsql.com',
  user: 'qfjnteeu',
  password: 'yJuuEtE6a30J94Q4hG0Y--48bfs5btbg',
  database: 'qfjnteeu',
  port: 5432
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('task', {

        deleteStudent(studentEmail) {
          return new Promise(function (resolve, reject) {
            const pool = new Pool(dbConfig)

            const query = 'DELETE FROM students WHERE email = $1;'

            pool.query(query, [studentEmail], function (error, result) {
              if (error) {
                reject({ error: error })
              }
              resolve({ success: result })
              pool.end()
            })
          })

        }
      })
    },
  },
});
