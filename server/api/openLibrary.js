const router = require('express').Router()
const axios = require('axios')

router.get('/:search', async (req, res, next) => {
  try{
    let response = await axios.get(`http://openlibrary.org/search.json?q=${req.params.search}`)
    // console.log('TESTSETSETSE',response.data.docs.slice(0, 1))
    // let firstNine = response.data.docs.slice(0, 9)
    res.status(200).json(response.data)

  } catch(err){
      next(err)
  }
})
 
module.exports = router  