const router = require('express').Router();

//API Routes 
// router.use

//Handles 404 Errors
router.use((req, res, next) => {
  const err = new Error('Not Found. TEST')
  err.status = 404; 
  next(err)
})

module.exports = router;