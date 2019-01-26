//USER ACTION TYPE
export const GET_USER = 'GET_USER'
export const NEW_USER = 'NEW_USER'

//USER ACTION CREATOR
export const getUser = (user) => {
  return {
    type: GET_USER,
    user
  }
}
