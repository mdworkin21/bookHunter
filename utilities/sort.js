function sortResults(arr, sortBy){
  if (sortBy === 'Year'){
   arr.sort((a,b) => {
    return a['first_publish_year'] - b['first_publish_year']})
  }

  if (sortBy === 'Author'){
    arr.sort((a,b) => {
      let authorA = a['author_name']
      let authorB = b['author_name']
      if (authorA < authorB){
        return -1
      }
      if (authorA > authorB){
        return 1
      }
      return 0
    })
  }

  if (sortBy === 'Title'){
    arr.sort((a,b) => {
      let titleA = a['title_suggest']
      let titleB = b['title_suggest']
      if (titleA < titleB){
        return -1
      }
      if (titleA > titleB){
        return 1
      }
      return 0
    })
  }

  return arr
}

module.exports = sortResults