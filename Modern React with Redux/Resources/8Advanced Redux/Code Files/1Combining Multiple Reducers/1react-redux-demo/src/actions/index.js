export const GET_ALL_BOOKS = 'GET_ALL_BOOKS'
export const ADD_A_BOOK = 'ADD_A_BOOK'

export function getAllBooks (books) {
  return {
    type: GET_ALL_BOOKS,
    books,
  }
}

export function addABook (newBook) {
  return {
    type: ADD_A_BOOK,
    newBook
  }
}

