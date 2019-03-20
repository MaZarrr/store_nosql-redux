import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers/reducers';
import thunkMiddleware from 'redux-thunk'

const logMiddelware = ({ getState }) => (next) => (action) => {
    console.log(action.type, getState());
    return next(action)
}

const stringMiddelware = () => (next) => (action) => {
        if(typeof action === 'string') {
            return next({type: action})
         }
         next(action);
    }

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddelware, logMiddelware))
const delayedActionCreator = () => (dispatch) => {
    window.setTimeout(() => dispatch({type: 'DELAY_ACTION'}), 3000);
}

store.dispatch(delayedActionCreator())

export {
    store
}






















// const logMiddelware = ({ getState }) => (next) => (action) => {
//     console.log(action.type, getState());
//     return next(action)
// }

// const stringMiddelware = () => (next) => (action) => {
//         if(typeof action === 'string') {
//             return next({type: action})
//          }
//          next(action);
//     }

// const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddelware, logMiddelware))
// // ------------------------
// // myAction - это функция которую вызовет thunk если мы передадим функцию в store как обычное действие, и само действие вып-ся через 2 сек
// // в это функции можем использовать несколько событий, передаем dispatch
// // const myAction = (dispatch) => {
// //     // этот код выполнится через 2 чек - само действие
// //     // в store передаем функцию, и эта функция уже самостоятельно будет решать когда как и сколько раз вызывать dispatch и какие действия
// //     // передавать
// //     window.setTimeout(() => dispatch({type: 'DELAY_ACTION'}), 2000);
// // }
// //-------------------------------
// // для thunk - action(действие) - это функция
// // actionCreator для thunk будет функция которая создает функцию(action)
// // actionCreator для thunk ---------
// // actionCreator это функция которая будет возврящать функцию(действие)
// // actionCreatorы это функции упрощающие создание действий
// // const delayedActionCreator = (timeout) => (dispatch) => {
// const delayedActionCreator = () => (dispatch) => {
//     window.setTimeout(() => dispatch({type: 'DELAY_ACTION'}), 3000);
// }
// // используя этот actionCreator delayedActionCreator можем не задум-тся что он создает? обычные действия обьекты или действия функции
// // delayedActionCreator он принимает параметры он создает действие
// store.dispatch(delayedActionCreator())
// // store.dispatch(delayedActionCreator(3000))

// // store.dispatch('HELLO'); 
// export {
//     store
// }

// dispatch так что бы настоящий dispatch сработал и передал это действие в reducer и что бы state обновился


































// import {createStore, applyMiddleware} from 'redux'
// import reducer from './reducers/reducers';
// import thunkMiddleware from 'redux-thunk'

// // applyMiddleware - сама является enhancer
// // Middleware подминяет dispatch
// /*
// (action) => { - возвращаемое значение-> это как бы новая версия нашей функции dispatch
// (dispatch) => - это способ получить существуюший dispatch, cущ-ю функцию dispatch которую мы можем использовать для того что бы всетаки 
// выполнить наше дуйствие action пример: наш logMiddelware печатает console.log(action.type) - тип действия, а затем передает это действие в
// (store) => эта функция служит для того что бы получить доступ к функциям Store, если к примеру нам захочется писать в log не только тип
// действия action.type, но еще и state который был в момент исполения этого действия, мы можем использовать store.getStore  console.log(action.type, store.getState());
// */
// // const logMiddelware = (store) => (dispatch) => (action) => {
// //     console.log(action.type, store.getState());
// //     return dispatch(action)
// // }

// const logMiddelware = ({ getState }) => (next) => (action) => {
//     console.log(action.type, getState());
//     return next(action)
// }

// // const stringMiddelware = () => (dispatch) => (action) => {
// //     if(typeof action === 'string') {
// //         return dispatch({type: action})
// //      }
// //     dispatch(action);
// // }
// const stringMiddelware = () => (next) => (action) => {
//         if(typeof action === 'string') {
//             return next({type: action})
//          }
//          next(action);
//     }

// const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddelware, logMiddelware))
// // Сперва вызываем store.dispatch и передаем туда действие HELLO - это действие пока не попадает в reducer, вместо этого действие перехват-тся
// // функцией applyMiddleware - и она будет послед-но вызывать функции сначала выз-тся stringMiddelware
// /*
// и мы получим вот это действие (action) => {
//         if(typeof action === 'string') { // если это строка то мы вызываем dispatch с обьектом {type: action} тут не настоящий next а ссылка
//             return next({type: action}) // на настоящий next это next вызовет ------- эту функцию ----------
//          }
//          next(action);
//     }
// ------ вызовет  ----------- (action) => { из logMiddelware и эта функция получит наше событие
//     console.log(action.type, getState());
//     return next(action)

//     logMiddelware получит действие(action)-> напечатаемтип этого действия в консоли а затем вызовем dispatch(next),
//     и поскольку logMiddelware он уже последний в цепочке то эта функция return next(action) это уже будет настоящий dispatch который передаст,
//     которое пепедаст наше действие в reducer- 
//     наши функции вызываются по цепочке, и когда наша функция закончила делать то чо она делает она должна передать управление след-ей функции
//     в цепочке именно поэтому аргумент dispatch часто пишут в виде next
//     const logMiddelware = ({ getState }) - функции из store
// */


// const myAction = (dispatch) => {
//     window.setTimeout(() => dispatch({type: 'DELAY_ACTION'}), 2000);
// }
// store.dispatch(myAction)

// // store.dispatch('HELLO'); 
// export {
//     store
// }















// STORE ENHANCER ------------------------------------------------------------------------
// // код который инициализирует redux store
// import {createStore, compose} from 'redux'
// import reducer from './reducers/reducers';

// // механизмы расширения Redux базовой функциональности 1й мех-м store Enhancer - позвол-т изменить то как работает весь обьект store
// // 2й мех-м расширение dispatch, - Redux Middleware

// // полность переписать механиз создания store
// // (...args) => - мы не будем перечислять все аргументы так как мы не будем их модифицировать, это возвращ знач-ие, новая функция createStore
// // (createStore) - это оригинальный store
// /*
// Эту функцию легко тестировать и распространять в виде одельного node модуля(переиспользованного модуля)
// Такой паттерн позволяет использовать функциональную композицию, есть 3 enhancer и каждый из этих функций отвечает за изменеие своего аспекта
// store мы можем их обьдинить в функциональную композицию для того что бы обьединить как бы в один enhancer который последовательно пименяет
// каждое из изменений
// */
// // В Redux системе есть много модулей на любой вкус
// // ПРИНИМАЕМ ФУНКЦИЮ createStore И ВОЗВРАЩАЕТ НОВУЮ ВЕРСИЮ STORE, ТАКИМ ОБЬРАЗОМ МОЖЕМ ЗАМЕНИТЬ ЛЮБОЙ АСПЕКТ СОЗДАНИЯ STORE И ЛЮБУЮ
// // ФУНКЦИЮ КОТОРАЮ ПРИСУТСТВУЕТ В STORE
// const stringEnhancer = (createStore) => (...args) => {
//     const store = createStore(...args);
//     const originalDispatch = store.dispatch; // не вызываю функцию а сохраняю ссылку на эту функцию
//         store.dispatch = (action) => {
//     if(typeof action === 'string') {
//         return originalDispatch({type: action})
//      }
//     originalDispatch(action);
//     }
//     return store 
// };
// const logEnhancer = (createStore) => (...args) => {
//     const store = createStore(...args);
//     const originalDispatch = store.dispatch; // не вызываю функцию а сохраняю ссылку на эту функцию
//         store.dispatch = (action) => {
//         console.log(action.type);
//         originalDispatch(action);
//     }
//     return store 
// };
// const store = createStore(reducer, compose(stringEnhancer, logEnhancer))
// store.dispatch('HELLO'); // ТЕПЕРЬ НАШ СТОРЕ УМЕЕТ ПРИНИМАТЬ СТРОКИ ВМЕСТО ДЕЙСТВИЙ

// // const originalDispatch = store.dispatch; // не вызываю функцию а сохраняю ссылку на эту функцию
// // store.dispatch = (action) => {
// //     if(typeof action === 'string') {
// //         return originalDispatch({type: action})
// //     }
// //     // если не строка
// //     // то нечего не делаем не вмешиваемся ни как в работу оригинальной функции dispach
// //     originalDispatch(action);
// // } 

// export {
//     store
// }