import React from 'react';
import { connect } from 'react-redux';
import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart } from '../../actions/actions';

import './shopping-cart-table.css';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  // item будет приходить из reduxStore  когда мы подключим этот компонент к Redux и индех этого элемента в массиве idx передаст map
  const renderRow = (item, idx) => { // отвечает за рендер 1й строки
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
     
        <tbody>
        { items.map(renderRow) }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
  // ключи это св-ва которые мы присваиваем компоненту, значения это знач из state которые мы будем использовать
  return {
    items: cartItems,
    total: orderTotal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     onIncrease: (id) => dispatch(bookAddedToCart(id)), 

     onDecrease: (id) => dispatch(bookRemovedFromCart(id)), 

     onDelete: (id) => dispatch(allBooksRemovedFromCart(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)










// import React from 'react';
// // import { connect } from 'react-redux';

// // import {
// //   bookAddedToCart,
// //   bookRemovedFromCart,
// //   allBooksRemovedFromCart } from '../../actions';

// import './shopping-cart-table.css';
// import { allBooksRemoveFromCart } from './../../actions/actions';

// const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

//   return (
//     <div className="shopping-cart-table">
//       <h2>Your Order</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Item</th>
//             <th>Count</th>
//             <th>Price</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//         <th>1</th>
//             <td>Engeneer</td>
//             <td>2</td>
//             <td>$40</td>
//             <td>Action</td>
//             <td>
//           <button
//             className="btn btn-outline-danger btn-sm float-right">
//             <i className="fa fa-trash-o" />
//           </button>
//           <button
           
//             className="btn btn-outline-success btn-sm float-right">
//             <i className="fa fa-plus-circle" />
//           </button>
//           <button
            
//             className="btn btn-outline-warning btn-sm float-right">
//             <i className="fa fa-minus-circle" />
//           </button>
//         </td>
//         </tbody>
//       </table>

//       <div className="total">
//         Total: $201
//       </div>
//     </div>
//   );
// };


// export default ShoppingCartTable

