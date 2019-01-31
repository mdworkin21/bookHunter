//USER ACTION TYPE
export const GET_USER = 'GET_USER'
export const NEW_USER = 'NEW_USER'
export const DELETE_USER = 'DELETE_USER'

//USER ACTION CREATOR
export const getUser = (user) => {
  return {
    type: GET_USER,
    user
  }
}

export const deleteUser = (user) => {
  return {
    type: DELETE_USER,
  }
}