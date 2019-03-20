// utils функции утилиты вроде функции compose в блоке паттерны react
// redux добавляет новые сущности и мы их назовем actions   reducers
import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/app/app';
import ErrorBoudary from './components/error-boundary/error-boundary';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context/bookstore-service-context';

import { store } from './store';

const bookstoreService = new BookstoreService();

// каждый компонент отвечает за свой аспект и все эти аспекты становятся доступны тем элементам которые находятся ниже по иерархии
ReactDOM.render (
    <Provider store={ store }>
        <ErrorBoudary>
         <BookstoreServiceProvider value={ bookstoreService }>
          <Router>
            <App />
          </Router>  
         </BookstoreServiceProvider>
        </ErrorBoudary>
    </Provider>,
    document.getElementById('root')
);