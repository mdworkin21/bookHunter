const {expect} = require('chai')
const queryStringConstructor = require('./queryStrConstructor')


describe('Tests for query string constructor function', () => {

  describe('queryStringConstructor returns a string', () => {
    it('returns a string', () => {
      expect(typeof queryStringConstructor({query: 'str'})).to.equal('string')
    })
  })

  describe('queryStringConstructor returns correct combinations', () => {
    it('returns a string with just author', () => {
      let queryObj = {
        query: {
          title: '',
          year: '',
          author: 'Alfred'
        }
      }
      expect(queryStringConstructor(queryObj)).to.equal('author=Alfred')
    })

    it('returns a string with author and year', () => {
      let queryObj = {
        query: {
          title: '',
          year: '2000',
          author: 'Alfred'
        }
      }
      expect(queryStringConstructor(queryObj)).to.equal('author=Alfred&year=2000')
    })

    it('returns a string with just title', () => {
      let queryObj = {
        query: {
          title: 'Ducks',
          year: '',
          author: ''
        }
      }
      expect(queryStringConstructor(queryObj)).to.equal('title=Ducks')
    })

    it('returns a string with title and year', () => {
      let queryObj = {
        query: {
          title: 'Ducks',
          year: '2000',
          author: ''
        }
      }
      expect(queryStringConstructor(queryObj)).to.equal('title=Ducks&year=2000')
    })
 
    it('returns a string with title and author', () => {
      let queryObj = {
        query: {
          title: 'Ducks',
          year: '',
          author: 'Alfred'
        }
      }
      expect(queryStringConstructor(queryObj)).to.equal('author=Alfred&title=Ducks')
    })
    
    it('returns a string with title, author, and year', () => {
      let queryObj = {
        query: {
          title: 'Ducks',
          year: '2000',
          author: 'Alfred'
        }
      }
      expect(queryStringConstructor(queryObj)).to.equal('author=Alfred&title=Ducks&year=2000')
    })
  })
})