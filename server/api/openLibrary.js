const router = require('express').Router()
const axios = require('axios')
const queryStringConstructor = require('../../utilities/queryStrConstructor')
const sortResults = require('../../utilities/sort')     

router.get('/:search?', async (req, res, next) => {
  console.log('IP', req)
  try{
    //Constructs query string for advanced searches and pings Open Library
   let advanced = queryStringConstructor(req)
   let queryString = req.query.q !== undefined ? `q=${req.query.q}`: advanced
   let response = await axios.get(`https://openlibrary.org/search.json?${queryString}`) 
   let sortedResponse = req.query.sort ? sortResults(response.data.docs, req.query.sort) : response.data
   res.status(200).json(sortedResponse)
        //For TESTING ERRMESSAGE
        //    res.sendStatus(500)
    } catch(err){
        next(err)
    }
})

module.exports = router  