import { createStore } from 'redux';

const initialState = {
  toDoList: []
}

export const addWork = (toDo) => {
  return {
    type: "ADD_TODO",
    payLoad: toDo
  }
}

export const deleteWork = (id) => {
  return {
    type: 'DEL_TODO',
    payLoad: id
  }
}

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': return {
      toDoList: [...state.toDoList, action.payLoad]
    }
    case 'DEL_TODO': return {
      toDoList: state.toDoList.filter((todo, index) => index != action.payLoad)
    }

    default: return state
  }
}

export const store = createStore(toDoReducer);
