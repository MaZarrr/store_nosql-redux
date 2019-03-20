import React from 'react';
import './app.css'
// import withBookstoreService from '../hoc/with-bookstore-service'
import { Route, Switch } from 'react-router-dom';
import HomePage from './../pages/home-page';
import CartPage from './../pages/card-page';
import ShopHeader  from '../shop-header'

import './app.css';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210}/>
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact />

        <Route
          path="/cart"
          component={CartPage}
          />
      </Switch>
    </main>
  );
};

export default App;






// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
// import ShopHeader from './../shop-header/index';


    //     const data = [
    //         {name: 'Dubai', uv: 350, pv: 1300, amt: 2400}, 
    //         // {name: 'Dubai', uv: window.setInterval(() => Math.floor(Math.random(222 * 2) * 3), 1000), pv: 1300, amt: 2400}, 
    //         {name: 'Moscow', uv: 212, pv: 1000, amt: 2100}, 
    //         {name: 'Berlin', uv: 900, pv: 700, amt: 1800}, 
    //         {name: 'New-York', uv: 444, pv: 400, amt: 1500}, 
    //         {name: 'Washington', uv: 56, pv: 0, amt: 1200}
    // ];
    
        
// const renderLineChart = (
//     <BarChart width={730} height={250} data={data}>
//     <CartesianGrid strokeDasharray="1 1" />
//     {/* <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}> */}
//       <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//       {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
//       <XAxis dataKey="name" />
//       <YAxis dataKey="pv"/>
//       <Bar dataKey="pv" fill="#8884d8" />
//         <Bar dataKey="uv" fill="#82ca9d" />
//       <Tooltip />
//     {/* </LineChart> */}
//     </BarChart>
//   );











