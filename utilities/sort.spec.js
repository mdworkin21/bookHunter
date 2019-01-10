const {expect} = require('chai')
const sortResults = require('./sort')


describe('Tests for sort function', () =>{
  let testInput = [
    {
      first_publish_year: 2000,
      author_name: 'Alfred',
      title_suggest: 'Ducks'
    },
    {
      first_publish_year: 1995,
      author_name: 'Billy',
      title_suggest: 'Camals'
    },
    {
      first_publish_year: 1990,
      author_name: 'Claud',
      title_suggest: 'Elephants'
    }
  ]

  describe('sortResults function return type', () => {
    it('returns an array', () => {
      expect(Array.isArray(sortResults([1,2,3]))).to.equal(true)
    })

  })

  describe('sortResults by year', () => {
    it ('returns an array sorted by year', () => {
      let sortedResults = sortResults(testInput, 'Year')
      expect(sortedResults[0]['first_publish_year']).to.equal(1990)
      expect(sortedResults[1]['first_publish_year']).to.equal(1995)
      expect(sortedResults[2]['first_publish_year']).to.equal(2000)
    })
  })
    
  describe('sortResults by author', () => {
    it ('returns an array sorted by author', () => {
      let sortedResults = sortResults(testInput, 'Author')
      expect(sortedResults[0]['author_name']).to.equal('Alfred')
      expect(sortedResults[1]['author_name']).to.equal('Billy')
      expect(sortedResults[2]['author_name']).to.equal('Claud')
    })
  })

  describe('sortResults by title', () => {
    it ('returns an array sorted by title', () => {
      let sortedResults = sortResults(testInput, 'Title')
      expect(sortedResults[0]['title_suggest']).to.equal('Camals')
      expect(sortedResults[1]['title_suggest']).to.equal('Ducks')
      expect(sortedResults[2]['title_suggest']).to.equal('Elephants')
    })
  })
})