import React from 'react';
import BookListContainer from '../../containers/book-list-container';
import ShoppingCartTable from '../shopping-cart-table';

const HomePage = () => {
    return (
        <>
        <BookListContainer />
        <ShoppingCartTable />
        </>
        )
}

export default HomePage