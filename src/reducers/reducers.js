import updateBookList from '../reducers/book-list'
import updateShoppingCart from '../reducers/shopping-cart'
/*
ЭТИ ФУНКЦИИ ОТВЕЧАЮТ ЗА ОБНОВЛЕНИЕ СВОИХ ЧАСТЕЙ ГЛОБАЛЬНОГО STATE, И НАХОДЯТСЯ В
ОТДЕДЬНЫХ НЕЗАВИСИМЫХ ФАЙЛАХ
updateBookList(state, action), 
shoppingCart: updateShoppingCart(state, action) 
*/
const reducer = ( state, action ) => {
    return {
        bookList: updateBookList(state, action), 
        shoppingCart: updateShoppingCart(state, action)  
    }
}
export default reducer






















// const initialState = {
//     bookList: {
//         books: [], 
//         loading: true,
//         error: null
//     },
//     shoppingCart: {
//         cartItems: [],
//         orderTotal: 0
//     }
// }



// switch(prop('type', action)) {    
    //     case 'BOOK_ADDED_TO_CART':
    //     case 'BOOK_REMOVE_FROM_CART':
    //     case 'ALL_BOOKS_REMOVE_FROM_CART':
//         return {
//             ...state,
//             shoppingCart: updateShoppingCart(state, action)
//         }
//     case 'FETCH_BOOKS_REQUEST':
//     case 'FETCH_BOOKS_SUCCESS':
//     case 'FETCH_BOOKS_FAILURE':
//         return {
//             ...state,
//             bookList: updateBookList(state, action)
            
//         }
//     default: return state
// }  




























// const updateOrder = (state, bookId, num) => { // функция добавления кники к текущему заказу
//     const { books, cartItems} = state
//                                                                                   // const bookId = action.payload  // получ id книги    
//   const book = books.find((book) => equals(book.id, bookId))                // теперь у нас есть обьект книга
//   const itemIndex = cartItems.findIndex(({ id }) => equals(id, bookId))     //  ищем индекс элем у которого индек точно такой же как у книги с которой мы сейчас работаем
//                                                                                   //(itemIndex - может быть 1 или -1 если такого индекса не существует)
//   const item = cartItems[itemIndex];                                        // получили сам элемент // -1 undefaind // есть элемент который нужно обновить
//   const newItem = updateCartItem(book, item, num)
//   return {...state, cartItems: updateCartItems(cartItems, newItem, itemIndex)}
// }








// import R, {cond, equals, evolve, T, always, propOr, prop, path, not, complement, update, assoc, assocPath, __, merge, ifElse, unless, when, remove, identity,
//     inc, add, gte, lte, gt, lt, drop } from 'ramda'
    
//     const initialState = {
//         books: [], 
//         loading: true,
//         error: null,
//         cartItems: [],
//         orderTotal: 220
    
//     }
    
//     const updateCartItems = (cartItems, newItem, idx) => {
//         //  ifElse(lt(prop('count', newItem), __)( drop(0, cartItems)), identity)(0)
//         // when(equals(__, 0), remove(idx, newItem))(cartItems.count);
//         if(newItem.count === 0) {
//             return [
//             ...cartItems.slice(0, idx),
//             ...cartItems.slice(idx + 1)
//             ]       
//         }
    
//         if(idx === -1) {
//             return [
//                 ...cartItems,
//                 newItem
//             ]
//         }
//         return [ 
//             ...cartItems.slice(0, idx),
//             newItem,
//             ...cartItems.slice(idx + 1)        
//         ]
//       }
    
//       const updateOrder = (state, bookId, num) => { // функция добавления кники к текущему заказу
//           const { books, cartItems} = state
//                                                                                         // const bookId = action.payload  // получ id книги    
//         const book = books.find((book) => equals(book.id, bookId))                // теперь у нас есть обьект книга
//         const itemIndex = cartItems.findIndex(({ id }) => equals(id, bookId))     //  ищем индекс элем у которого индек точно такой же как у книги с которой мы сейчас работаем
//                                                                                         //(itemIndex - может быть 1 или -1 если такого индекса не существует)
//         const item = cartItems[itemIndex];                                        // получили сам элемент // -1 undefaind // есть элемент который нужно обновить
//         const newItem = updateCartItem(book, item, num)
//         return {...state, cartItems: updateCartItems(cartItems, newItem, itemIndex)}
//       }
    
//     const updateCartItem = (book, item = {}, num) => {
//         const { 
//             id = book.id, 
//             count = 0, 
//             title = book.title, 
//             total = 0 } = item;
    
//             return {
//                 id,
//                 title,
//                 count: count + num,
//                 total: total + (book.price * num)
//             }
//     };
    
    
//     const reducer = ( state = initialState, action) => {
//     console.log(action.type);
//         switch(prop('type', action)) {
//             case 'FETCH_BOOKS_REQUEST':
//             return {
//                ...state,
//                 books: [], 
//                 loading: true,
//                 error: null,
//             }
//             case 'FETCH_BOOKS_SUCCESS':
//             return {
//                 ...state,
//                  books: prop('payload', action),
//                  loading: false,
//                  error: null,
//             }
//             // действие ошибка получения данных
//             // в этом действии мы передаем в payload передаем обьек ошибки, затем наши компоненты могут взять детали и показать сообщение об ошибке
//             case 'FETCH_BOOKS_FAILURE':
//             return {
//                 ...state,
//                 books: [], 
//                 loading: false,
//                 error: action.payload
//             }
//             case 'BOOK_ADDED_TO_CART':
//                 return updateOrder(state, action.payload, 1)
            
//             case 'BOOK_REMOVE_FROM_CART':
//                 return updateOrder(state, action.payload, -1)
      
//             case 'ALL_BOOKS_REMOVE_FROM_CART':
//                 const item = state.cartItems.find(({id}) => equals(id, prop('payload', action)))
//                 // console.log(item);
//                 return updateOrder(state, action.payload, -item.count)
//             default:
//                  return state;
        
//         }
//     }
    
//     export default reducer
    



















// console.log(bookId, 'bookId, number');
// console.log(book, 'book, object');
// console.log(itemIndex, 'itemIndex 1, -1');        
// console.log(item, 'item, object');
// console.log(state.books, 'state.books, array');





 //    return evolve({cartItems: updateCartItems(state.cartItems, newItem, itemIndex)})

    //    return {
    //        ...state,
    //        cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
    //         }
        //    const st = unless(updateCartItems(state.cartItems, newItem, itemIndex))(evolve({cartItems: update(itemIndex, newItem)}))(state)
        //    const st = unless(updateCartItems(state.cartItems, newItem, itemIndex))(evolve({cartItems: update(itemIndex, newItem)}))(state)
        //    const st = unless(updateCartItems(state.cartItems, newItem, itemIndex), evolve({cartItems: update(itemIndex, newItem)}))(state)

        //   return {cartItems: st()};
           
          
          
          // if(itemIndex < 0) {
        //     console.log(state.cartItems, 'state.cartItems, array');
        //       return { 
        //           ...state,
        //             cartItems: [
        //                 ...state.cartItems,
        //                 newItem
        //             ]
        //         }           
        // } else { 
        //     console.log(state.cartItems);
        //     return evolve({
        //         cartItems: update(itemIndex, newItem)
        //     })(state)
            
        // }




















// } else { // если у нас уже есть индекс,  есть существующий массив // или evolve(__, state)
//     return evolve({
//         cartItems: update(itemIndex, newItem)
//     })(state)
// }
// default:
//     return state;
// }
// }




// } else { // если у нас уже есть индекс,  есть существующий массив
//     return {
//        ...state,
//    update предоставляет нам новый массив, который обновляет элемент по индексу index указанным значением.
//         cartItems: update(itemIndex, newItem, state.cartItems)
//         // ...state,
//         // cartItems: [
//         //     ...state.cartItems.slice(0, itemIndex),
//         //     newItem, // добавляем новый элем независимо от чего, нужно проверить сущ или нет
//         //     ...state.cartItems.slice(itemIndex + 1),
//         // ]
//     };
// }










// import R, {cond, equals, evolve, T, always, propOr, prop, path, not, complement, update, assoc, assocPath} from 'ramda'

// // -------- createReducer
// // createReducer вспомогательная функция из в Redux Docs . Это позволяет вам легко создавать редукторы, 
// // - передавая начальное состояние и объект, описывающий, как редуктор реагирует на данное действие.
// const initialState = {
//     books: [], 
//     loading: true,
//     error: null,
//     cartItems: [],
//     orderTotal: 220

// }
// const reducer = ( state = initialState, action) => {
// console.log(action.type);
//     switch(prop('type', action)) {
//         case 'FETCH_BOOKS_REQUEST':
//         return {
//            ...state,
//             books: [], 
//             loading: true,
//             error: null,
//         }
//         case 'FETCH_BOOKS_SUCCESS':
//         return {
//             ...state,
//              books: prop('payload', action),
//              loading: false,
//              error: null,
//         }
//         // действие ошибка получения данных
//         // в этом действии мы передаем в payload передаем обьек ошибки, затем наши компоненты могут взять детали и показать сообщение об ошибке
//         case 'FETCH_BOOKS_FAILURE':
//         return {
//             ...state,
//             books: [], 
//             loading: false,
//             // error мы получим(передадим) в наш reducer через action значение той ошибки котор у нас произошла payload
//             // любой компонент сможет прочитать детали ошибки и решить каким способом ее отображать
//             error: action.payload
//         }
//         case 'Book_Added_To_Cart':
//         const bookId = action.payload // получ id книги    
//         const book = state.books.find((book) => book.id === bookId) // теперь у нас есть обьект книга
//         const newItem = {
//                 id: book.id,
//                 name: book.title,
//                 count: 1,
//                 total: book.price
//             };
//             return {
//                 ...state,
//                 cartItems: [
//                     ...state.cartItems,
//                     newItem
//                 ]
//             }
            
//         default:
//             return state;
//     }
// }

// export default reducer










// // initialStateНадеюсь - это начальное состояние нашего редуктора. 😏
// // handlers более интересен - он представляет ответ вашего редуктора на данное действие.
// // reducer = (state = initialState, -- возвращает новый редуктор . Это верно, он выплевывает редуктор, предварительно загружая его stateс вашим поставляемым initialState.
// const createReducer = (initialState, handlers) => {
//     const reducer = (state = initialState, action) => {
//    //if/else для замены все switchслучаи, которые имел бы ваш редуктор . Он проверяет, имеет ли ваш handlersобъект тип 
//     // -- действия как свойство 
//     if(handlers.hasOwnPropepty(action.type)) {
//         return handlers[action.type](state, action)
//         } else {
//             return state
//         }
//     }
// }
// export default createReducer





















// export default reducer

// const createReducer = (initialState, {}) 
// export default createReducer


// https://medium.com/front-end-weekly/redux-lets-refactor-our-higher-order-duck-e44b0110befc












 // propOr(initialState, prop('type', action), "BOOKS_LOADED")(state)
    //  cond([
    //     [equals("BOOKS_LOADED"), () => evolve({books: action.payload}, state)],
    //     [T, () => state]
    // ]);
    
    // const reducer = ( state = initialState, action) => {
    //     cond([
    //    [equals("BOOKS_LOADED"), evolve({books: action.payload})]
    //    ]);