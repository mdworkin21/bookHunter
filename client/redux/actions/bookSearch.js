//Constants for Action Types
export const GET_BOOKS = 'GET_BOOKS'
export const SORT_BOOKS = 'SORT_BOOKS'
export const ADVANCED_TOGGLE = 'ADVANCED_TOGGLE'
export const LOADING = 'LOADING'
export const NO_RESULTS = 'BOOLEAN'
export const CLEAR = 'CLEAR'
export const ERR = 'ERR'


//Action Creators
export const getBooks = (books) => {
  return {
    type: GET_BOOKS,
    books
  }
}

export const sortBooks = (books) => {
  return {
    type: SORT_BOOKS,
    books
  }
}

export const toggleAdvancedSearch = (boolean) => {
  return {
    type: ADVANCED_TOGGLE,
    boolean
  }
}

export const isLoading = (boolean) => {
  return {
    type: LOADING,
    boolean
  }
}

export const noResults = (boolean) => {
  return {
    type: NO_RESULTS,
    boolean
  }
}

export const clearResults = () => {
  return {
    type: CLEAR
  }
}

export const flagErr = (errCode) => {
  return {
    type: ERR,
    errCode
  }
}

