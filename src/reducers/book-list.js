import { prop } from 'ramda'

const updateBookList = (state, action) => {
    // eslint-disable-next-line default-case
    if(state === undefined) {
        return {
            books: [], 
            loading: true,
            error: null
          }
      }
  
      switch (prop('type', action)) {
          // действия работают со списком книг
          case 'FETCH_BOOKS_REQUEST':
       return {
           books: [], 
          loading: true,
          error: null
      };
      case 'FETCH_BOOKS_SUCCESS':
       return {
           books: prop('payload', action),
           loading: false,
           error: null
   };
   case 'FETCH_BOOKS_FAILURE':
       return {
           books: [], 
          loading: false,
          error: prop('payload', action)
   };
   default: return state.bookList
  }
}
export default updateBookList