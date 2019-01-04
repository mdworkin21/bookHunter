const router = require('express').Router()
const axios = require('axios')
//URL: http://openlibrary.org/search.json?

router.get('/', async (req, res, next) => {
  console.log('HITME!')
  try{
    let response = await axios.get('http://openlibrary.org/search.json?q=fight+club')
    console.log('RES', response)
    res.status(200).json(response.data)

  } catch(err){
      next(err)
  }
})

module.exports = router