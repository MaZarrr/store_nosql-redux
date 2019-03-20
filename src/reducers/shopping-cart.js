import { prop, equals } from 'ramda'

const updateShoppingCart = (state, action) => {
    // eslint-disable-next-line default-case
    if(state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    }
    switch(prop('type', action)) {       
        // действия работают со списком заказов
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1)
            
            case 'BOOK_REMOVE_FROM_CART':
            return updateOrder(state, action.payload, -1)

            case 'ALL_BOOKS_REMOVE_FROM_CART':
            const item = state.shoppingCart.cartItems.find(({id}) => equals(id, prop('payload', action)))
            return updateOrder(state, action.payload, -item.count)
            default: return state.shoppingCart
        } 
}
const updateCartItems = (cartItems, newItem, idx) => {
    //  ifElse(lt(prop('count', newItem), __)( drop(0, cartItems)), identity)(0)
    // when(equals(__, 0), remove(idx, newItem))(cartItems.count);
    if(newItem.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]       
    }

    if(idx === -1) {
        return [
            ...cartItems,
            newItem
        ]
    }
    return [ 
        ...cartItems.slice(0, idx),
        newItem,
        ...cartItems.slice(idx + 1)        
    ]
}
const updateCartItem = (book, item = {}, num) => {
    const { 
        id = book.id, 
        count = 0, 
        title = book.title, 
        total = 0 } = item;
        
        return {
            id,
            title,
            count: count + num,
            total: total + (book.price * num)
        }
};  
const updateOrder = (state, bookId, num) => { 
    const { bookList: {books}, shoppingCart: {cartItems} } = state
    
    const book = books.find((book) => equals(book.id, bookId))                
    const itemIndex = cartItems.findIndex(({ id }) => equals(id, bookId))                                                                                     
    const item = cartItems[itemIndex];                                        
    const newItem = updateCartItem(book, item, num)
return {orderTotal: 0, cartItems: updateCartItems(cartItems, newItem, itemIndex)}
}

export default updateShoppingCart 