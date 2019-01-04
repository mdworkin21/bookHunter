const app = require('./server')
const PORT = process.env.PORT || 8080
const {db} = require('./server/db/models')


//Syncs with DB and listens for connections on host and port
db.sync()
  .then(() => {
    console.log('db synced.')
    app.listen(PORT, () => {
      console.log('Server Live on Port: ', PORT)
    })
  });