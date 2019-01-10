// Covers all cases of valid query strings. 
// Does not have a case for just year. 
// Not allowing users to only search for books from a specific year. Instead we'll just return no results, and ask user to search again.

function queryStringConstructor(requestObj){
  let advancedStr;

  if (requestObj.query.title === '' & requestObj.query.year === ''){
    advancedStr = `author=${requestObj.query.author}`

  } else if (requestObj.query.title === ''){
    advancedStr = `author=${requestObj.query.author}&year=${requestObj.query.year}`

  } else if (requestObj.query.author === '' && requestObj.query.year === ''){
    advancedStr = `title=${requestObj.query.title}`

 } else if (requestObj.query.author === ''){
    advancedStr = `title=${requestObj.query.title}&year=${requestObj.query.year}`

  } else if (requestObj.query.year === ''){
    advancedStr = `author=${requestObj.query.author}&title=${requestObj.query.title}`

  } else {
    advancedStr = `author=${requestObj.query.author}&title=${requestObj.query.title}&year=${requestObj.query.year}`

  }
  return advancedStr
}

module.exports = queryStringConstructor