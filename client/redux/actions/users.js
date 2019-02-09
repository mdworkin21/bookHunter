//USER ACTION TYPE
export const GET_USER = 'GET_USER'
export const NEW_USER = 'NEW_USER'
export const DELETE_USER = 'DELETE_USER'
export const FAVORITE_BOOKS_LIST = 'FAVORITE_BOOKS_LIST'
export const WILL_READ_LIST = 'WILL_READ_LIST'

//USER ACTION CREATOR
export const getUser = (user) => {
  return {
    type: GET_USER,
    user
  }
}

export const deleteUser = () => {
  return {
    type: DELETE_USER,
  }
}

export const getFavorites = (favList) => {
  return {
    type: FAVORITE_BOOKS_LIST,
    favList
  }
}

export const getWillRead = (willRead) => {
  return {
    type: WILL_READ_LIST,
    willRead
  }
}