function queryStringConstructor(requestObj){
  let advancedStr;
  if (!requestObj.query.title & !requestObj.query.year){
    advancedStr = `author=${requestObj.query.author}`
  } else if (!requestObj.query.title){
    advancedStr = `author=${requestObj.query.author}&year=${requestObj.query.year}`
  } else if (!requestObj.query.author && !requestObj.query.year){
    advancedStr = `title=${requestObj.query.title}`
 } else if (!requestObj.query.author){
    advancedStr = `title=${requestObj.query.title}&year=${requestObj.query.year}`
} else if (!requestObj.query.author && !requestObj.query.title){
    advancedStr = `year=${requestObj.query.year}`
} else if (!requestObj.query.year){
    advancedStr = `author=${requestObj.query.author}&title=${requestObj.query.title}`
} else {
    advancedStr = `author=${requestObj.query.author}&title=${requestObj.query.title}&year=${requestObj.query.year}`
  }
  return advancedStr
}

module.exports = queryStringConstructor