const router = require('express').Router()
const axios = require('axios')

            
router.get('/:search?', async (req, res, next) => {
  try{
   let advanced;
   if (!req.query.title){
     advanced = `author=${req.query.author}`
   } else if (!req.query.author){
      advanced = `title=${req.query.title}`
   } else {
      advanced = `author=${req.query.author}&title=${req.query.title}`
   }

    let queryString = req.query.q !== undefined ? `q=${req.query.q}`: advanced
    let response = await axios.get(`http://openlibrary.org/search.json?${queryString}`) 
          res.status(200).json(response.data)
    } catch(err){
        next(err)
    }
})
module.exports = router  