export const GET_ALL_BOOKS = 'GET_ALL_BOOKS'
export const ADD_A_BOOK = 'ADD_A_BOOK'

export const SET_SELECTED_BOOK = 'SET_SELECTED_BOOK'
export const UPDATE_BOOK_DETAILS = 'UPDATE_BOOK_DETAILS'

export const ASYNC_ACTION = 'ASYNC_ACTION'

export const getAllBooksAPI = () => new Promise((res) => {
  const dataList = [{
    title: "Crisis3",
    author: "Robin Cook",
    genre: "Mystery thriller",
    summary: "The terrifying story of a doctor who is the victim of a medical malpractise crisis",
    id: 1004
  }, {
    title: "Crisis4",
    author: "Robin Cook",
    genre: "Mystery thriller",
    summary: "The terrifying story of a doctor who is the victim of a medical malpractise crisis",
    id: 1005
  }];
  setTimeout(() => {
    res(dataList);
  }, 3000);
})

export function addABook(newBook) {
  return {
    type: ADD_A_BOOK,
    newBook,
  }
}

export function setSelectedBook(selectedBook) {
  return {
    type: SET_SELECTED_BOOK,
    selectedBook,
  }
}

export function updateSelectedBook(updatedBook) {
  return {
    type: UPDATE_BOOK_DETAILS,
    updatedBook,
  }
}


export function getAllBook_AsyncActionCreator() {
  return (dispatch) => {
    getAllBooksAPI()
      .then((data) => {
        dispatch(getAllBooks(data));
      });
  };
}

export function getAllBooks(books) {
  return {
    type: GET_ALL_BOOKS,
    books,
  }
}







