import { GET_ALL_BOOKS, ADD_A_BOOK } from "../actions";

const existingBooks = {
  books: [
    {
      title: "Origins",
      author: "Dan Brown",
      genre: "Medical thriller",
      summary: "The fifth installment in the Robert Langdon series",
      id: 1001
    },
    {
      title: "Crisis",
      author: "Robin Cook",
      genre: "Mystery thriller",
      summary: "The terrifying story of a doctor who is the victim of a medical malpractise crisis",
      id: 1002
    }
  ]
}


export default function books(state = existingBooks, action) {
  switch (action.type) {
    case GET_ALL_BOOKS:
      console.log("GET_ALL_BOOKS-action->", JSON.stringify(action));
      console.log("GET_ALL_BOOKS-old-state->", JSON.stringify(state));
      return {
        books: state.books.concat(...action.books)
      }
    case ADD_A_BOOK:
      console.log("ADD_A_BOOK-action->", JSON.stringify(action));
      console.log("ADD_A_BOOK-old-state->", JSON.stringify(state));
      return {
        books: state.books.concat(action.newBook)
      }
    default:
      console.log("default--INIT-state>", JSON.stringify(state));
      return {
        ...state
      }
  }
}

