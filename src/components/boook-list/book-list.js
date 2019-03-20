import BookListItem from './../boook-list-Item/book-list-item'
import React from 'react';
import { map } from 'ramda'

// ОТВЕЧАЕТ ИСКЛЮЧИТЕЛЬНО ЗА ОТРИСОВКУ
const BookList = ( { books, onAddedToCart } ) => {
    return (
        <ul>
            {
                map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem 
                            book={book}
                            // когда мы подпишемся на функцию () => onAddedToCart(book.id) мы будем знать какую именно книгу пытается добавить пользователь
                            onAddedToCart={() => onAddedToCart(book.id)}   
                            />
                        </li>
                    )
                }, books)
            }
        </ul>
    )   
}

export default BookList






















    // import Spinner from './../spinner/spinner';
    // import ErrorIndicator from './../error-indicator/error-indicator';
    
    // class BoookList extends Component {
    
    // componentDidMount() {
    //     const { bookstoreService, booksLoaded, booksRequested, booksError } = this.props
    //     // перед тем как отправить запрос на сервер(получение новых книг) 
    //      // - мы сначала вызовем actionCreator(booksRequested) - установим значение loading true, и после этого мы  будем отображ спиннер пока не 
    //      // получим данные
    //     booksRequested()
    //      bookstoreService.getBooks()
    //     .then((data) =>  booksLoaded(data))
    //     // когда наш промис getBooks возвращ ошибку мы диспатчим вот это действие (err) => booksError(err) и передаем обьект с ошибкой в actionCreator
    //     // - этот action затем передается в наш reducer, reducer обновляет соответствующее поле и затем в нашем компоненте мы можем прочитать
    //     // - значения поля
    //     .catch((err) => booksError(err))
    // }
    
    //     render() {
    //         // из redux store получаем список книг const { books } = this.props и отрисовываем
    //         // в нашем компоненте мы можем прочитать значения поля была ошибка или нет? и отобразить индикатор если у нас была ошибка
    //         const { books, loading, error } = this.props
    
    //         if(loading) {
    //             return <Spinner />
    //         }
    
    //         if(error) {
    //             return <ErrorIndicator />
    //         }
    
    //         return (
    //             <ul>
    //                 {
    //                     map((book) => {
    //                         return (
    //                             <li key={book.id}>
    //                                 <BookListItem 
    //                                 book={book}/>
    //                             </li>
    //                         )
    //                     }, books)
    //                 }
    //             </ul>
    //         )   
    //     }
    // }
    
    // const mapDispatchToProps =  {
    //     booksLoaded,
    //     booksRequested,
    //     booksError
    // }
    // // ({ books, loading }) redux состояния которые будут доступны в виде св-в нашиму компоненту
    // const mapStateToProps = ({ books, loading, error }) => {
    //     return {
    //         books,
    //         loading, 
    //         error
    //     }
    // }
    
    // export default compose (
    //     withBookstoreService(),
    //     connect(mapStateToProps, mapDispatchToProps)
    //     )(BoookList)
    



















    // componentDidMount() {
    //     const { bookstoreService, booksLoaded } = this.props
    //     const data = bookstoreService.getBooks();
    //     console.log(data);
    //     //  booksLoaded(data); это actionCreator который вызывает dispatch и передает данные список книг в redux store
    //     booksLoaded(data);
    // }



// const myCompose = (...func) => (comp) => {
//     return func.reduceRight((wrapped, f) => {
//         return f(value)
//     }, wrapped)
// }


// // const mapStateToProps = (state) => {
//     const mapStateToProps = ({ books }) => {
//         return {
//     // books: state.books в компонент передаем св-во books которое = нашему глобальному state.books  
//             // books: state.books
//             books
//         }
//     }


// export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BoookList))

// const myCompose = (...func) => (comp) => {
//     return func.reduceRight((f, value) => {
//         return f(value)
//     }, comp)
// }

// export {myCompose}




// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({booksLoaded}, dispatch)
//   }


// const mapDispatchToProps = (dispatch) => {
//     return {
//         booksLoaded: (newBooks) => {
//             dispatch(booksLoaded(newBooks))
//         }
//     }
// }


// const mapDispatchToProps = (dispatch) => {
//     return {
//         booksLoaded: (newBooks) => {
//             dispatch({
//                 type: 'BOOKS_LOADED',
//                 payload: newBooks
//             })
//         }
//     }
// }
