// naming convenchion [тип запроса]_[обьект]_[действие]
const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST' // запрос отправлен
    }
} 
const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS', // получен результат(в payload передаются полученные данные)
        payload: newBooks
    };
};
const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',  // получение ошибки
        payload: error
    }
} 
const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
} 
const bookRemovedFromCart = (bookId) => {
    return {
        type: 'BOOK_REMOVE_FROM_CART',
        payload: bookId
    }
} 
const allBooksRemovedFromCart = (bookId) => {
    return {
        type: 'ALL_BOOKS_REMOVE_FROM_CART',
        payload: bookId
    }
} 

const fetchBooks = (bookstoreService) => () => (dispatch) => {
    dispatch(booksRequested())
    bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)))  
}

export {
    fetchBooks,
    bookRemovedFromCart,
    bookAddedToCart,
    allBooksRemovedFromCart
}
// все эти actionCreatorы используются в fatchBooks
// export {
//     booksLoaded,
//     booksRequested,
//     booksError
// }






















// // а внутренняя для Компонента
// fetchBooksOld = (bookstoreService, dispatch) =>  - сам создаю функцию передаю в нее dispatch и затем мой компонент запускал набор действий
// работал с асинхронными действиями без thunk
// потом я начал замечать что я не хочу запоминать какие из функций явл actionCreator какие функции создают действия,  fetchBooks = (bookstoreService) => () => (dispatch)
// А КАКИЕ ФУНКЦИИ нужно вызывать самостоятельно fetchBooksOld = (bookstoreService, dispatch), поскольку они не создают действия а запускают 
// разные процессы например  dispatch(booksRequested())
                            // bookstoreService.getBooks()
                            // .then((data) => dispatch(booksLoaded(data)))
                            // .catch((err) => dispatch(booksError(err)))  
// и только тогда роль thunk стала очевидной thunk позволил интерпритировать все функции как ActionCreator создатели действий(более чистый код
// в mapDispatchToProps)
// const fetchBooksOld = (bookstoreService, dispatch) => () => {
//         dispatch(booksRequested())
//         bookstoreService.getBooks()
//         .then((data) => dispatch(booksLoaded(data)))
//         .catch((err) => dispatch(booksError(err)))  
// }










// import R, {cond, equals, evolve, T, always, propOr, prop, path, identical} from 'ramda'

// const booksLoaded = (newBooks) => {
//     return {
//         type: 'BOOKS_LOADED',
//         payload: newBooks
//     };
// };

// const booksRequested = () => {
//     return {
//         type: 'BOOKS_REQUESTED'
//     }
// } 
// // функция принимает на вход обьект ошибку котор мы получ от сервиса, создает новый обьект действия с типом BOOKS_ERROR
// //- это именно тот тип действия который мы ожидаем получить в нашем reducer, и затем сохраняет наш обьект с ошибкой под именем payload в -
// // - обьекте action
// const booksError = (error) => {
//     return {
//         type: 'BOOKS_ERROR',
//         payload: error
//     }
// } 
//  // эта функция может быть переиспользована теми компонентами которые хотят тоже получить список книг
//  // этот процесс связан с redux и actionCreatorami
// // во вторую функцию не передаем аргуметы потому что мы не хотим что бы наш обьект зависил от этих аргументов а просто вызывал функцию fetchBooks,
// // и запустил процесс получения книг, (bookstoreService и dispatch) - не должны касаться нашего компонента
// // fetchBooks функция которая вызывает функцию, внешняя функция (bookstoreService, dispatch) предназначена для работы в mapDispatchToProps
// // а внутренняя для Компонента
// const fetchBooks = (bookstoreService, dispatch) => () => {
//         dispatch(booksRequested())
//         bookstoreService.getBooks()
//         .then((data) => dispatch(booksLoaded(data)))
//         .catch((err) => dispatch(booksError(err)))  
// }


// export {
//     fetchBooks
// }
// // все эти actionCreatorы используются в fatchBooks
// // export {
// //     booksLoaded,
// //     booksRequested,
// //     booksError
// // }



// const actions = [
//     {
//         type: 'BOOKS_LOADED', 
//         payload: ''
//     }
// ]

// const booksLoaded = (newBooks) => evolve({ type: 'BOOKS_LOADED', payload: newBooks}, actions)