import React, {Component} from 'react';
import { compose } from 'ramda'
import { connect } from 'react-redux'
import withBookstoreService from '../components/hoc/with-bookstore-service'
import { fetchBooks, bookAddedToCart } from '../actions/actions'
import Spinner from '../components/spinner/spinner';
import ErrorIndicator from '../components/error-indicator/error-indicator';
import BookList from '../components/boook-list/book-list'
import  { bindActionCreators } from 'redux'
// import axios from 'axios'
import { append, keys, concat, merge, prepend, update, insert } from 'ramda'

// ОТВЕЧАЕТ ИСКЛЮЧИТЕЛЬНО ЗА ПОВЕДЕНИЕ
class BookListContainer extends Component {

componentDidMount() {
    const { fetchBooks } = this.props
    fetchBooks();    
};

render() {
    const { books, loading, error, onAddedToCart  } = this.props

    if(loading) {
        return <Spinner />
        }
        
        if(error) {
            return <ErrorIndicator />
        }

        return <BookList books={books}
                         onAddedToCart={onAddedToCart}
        />
    }
}

const mapStateToProps = ({bookList: { books, loading, error }}) => {
    return {
        books,
        loading, 
        error
    }
}

const mapDispatchToProps = (dispatch, { bookstoreService } ) => {
    return bindActionCreators({
        // передаем действие fetchBooks которое создаст функцию и эту функцию обработает thunk проверит на typeOf action === 'function'
        // и передаем обычный actionCreator bookAddedToCart - создвет обычное действие обьект
        fetchBooks: fetchBooks(bookstoreService),
        // до этого мы вручную вызывали actionCreator bookAddedToCart(), создавали действие и передавали его в dispatch
        // dispatch(bookAddedToCart(id))
        onAddedToCart: bookAddedToCart // передали сам actionCreator саму функцию bookAddedToCart
    }, dispatch)
};
/*
так же как и раньше успешно получаем список книг и передаем все необходимые действия в store для того что бы сказать что мы начали получать 
список книг, получили список или произошла ошибка

*/
// const mapDispatchToProps = (dispatch, { bookstoreService } ) => {
    //     return {
        //         fetchBooks: fetchBooks(bookstoreService, dispatch),
        //         onAddedToCart: (id) => dispatch(bookAddedToCart(id))
//     }
// };

export default compose (
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(BookListContainer)











    // const mapDispatchToProps = (dispatch, { bookstoreService } ) => {
    //     return bindActionCreators({
    //         // передаем действие fetchBooks которое создаст функцию и эту функцию обработает thunk проверит на typeOf action === 'function'
    //         // и передаем обычный actionCreator bookAddedToCart - создвет обычное действие обьект
    //         fetchBooks: fetchBooks(bookstoreService),
    //         // до этого мы вручную вызывали actionCreator bookAddedToCart(), создавали действие и передавали его в dispatch
    //         // dispatch(bookAddedToCart(id))
    //         onAddedToCart: bookAddedToCart // передали сам actionCreator саму функцию bookAddedToCart
    //     }, dispatch)
    // };
    // /*
    // так же как и раньше успешно получаем список книг и передаем все необходимые действия в store для того что бы сказать что мы начали получать 
    // список книг, получили список или произошла ошибка
    // */
    // // const mapDispatchToProps = (dispatch, { bookstoreService } ) => {
    //     //     return {
    //         //         fetchBooks: fetchBooks(bookstoreService, dispatch),
    //         //         onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    // //     }
    // // };

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    // class BookListContainer extends Component {
    //     state = [
    //         {a: 1},
    //         {b: 2},
    //         {c: 3}
    //     ];
    
    
    
    
    

    
    

    

    //    import BookListItem from './../boook-list-Item/book-list-item'
    //    import React, {Component} from 'react';
    //    import { map, compose } from 'ramda'
    //    import { connect } from 'react-redux'
    //    import withBookstoreService from '../hoc/with-bookstore-service'
    //    import {fetchBooks} from '../../actions/actions'
    //    // import  { bindActionCreators } from 'redux'
    //    import Spinner from './../spinner/spinner';
    //    import ErrorIndicator from './../error-indicator/error-indicator';
   
//    // ОТВЕЧАЕТ ИСКЛЮЧИТЕЛЬНО ЗА ОТРИСОВКУ
//    const BookList = ( {books} ) => {
//        return (
//            <ul>
//                {
//                    map((book) => {
//                        return (
//                            <li key={book.id}>
//                                <BookListItem 
//                                book={book}/>
//                            </li>
//                        )
//                    }, books)
//                }
//            </ul>
//        )   
//    }
//    // ОТВЕЧАЕТ ИСКЛЮЧИТЕЛЬНО ЗА ПОВЕДЕНИЕ
//    class BookListContainer extends Component {
   
//    componentDidMount() {
//        this.props.fetchBooks();
//    }
   
//        render() {
//            // в нашем компоненте мы можем прочитать значения поля была ошибка или нет? и отобразить индикатор если у нас была ошибка
//            const { books, loading, error } = this.props
   
//            if(loading) {
//                return <Spinner />
//            }
   
//            if(error) {
//                return <ErrorIndicator />
//            }
//            return <BookList books={books}/>
//        }
//    }
   
//    // ({ books, loading }) redux состояния которые будут доступны в виде св-в нашиму компоненту
//    // mapStateToProps берет части нашего глоального state и передает нашему компоненту в качесве свойств 
//    const mapStateToProps = ({ books, loading, error }) => {
//        return {
//            books,
//            loading, 
//            error
//        }
//    }
   
//    const mapDispatchToProps = (dispatch, { bookstoreService } ) => {
//        // const { bookstoreService } = ownProps
//        return {
//            fetchBooks: fetchBooks(bookstoreService, dispatch)
//        }
//    };
   
//    export default compose (
//        withBookstoreService(),
//        connect(mapStateToProps, mapDispatchToProps)
//        )(BookListContainer)
//        /*
//        ownProps - это те св-ва которые перешли компоненту connect, в ownProps будет тот сервис который мы хотим получить bookstoreService
//        export default compose (
//            - все что добавляет - withBookstoreService(), - доступно в сonnect
//            - все что добавляет - connect(mapStateToProps, mapDispatchToProps) - будет в результате доступно компоненту BoookList
//            )(BoookList)
//        */