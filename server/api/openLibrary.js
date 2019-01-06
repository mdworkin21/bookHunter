const router = require('express').Router()
const axios = require('axios')

            
router.get('/:search', async (req, res, next) => {
              try{
                console.log('BACKKKK', req.params.search)
                let response = await axios.get(`http://openlibrary.org/search.json?q=${req.params.search}`)
            
                res.status(200).json(response.data)
            
              } catch(err){
                  next(err)
              }
            })
module.exports = router  