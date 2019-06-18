import React from 'react';
import ReactDOM from 'react-dom';
import './css/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductList } from './products/ProductList';

// const data=[   
//               {
//                 id:1,
//                 name:'Dhoni',
//                 team:'India'
//               },
//               {
//                 id:2,
//                 name:'Kohli',
//                 team:'India'
//               }
             
//             ];
ReactDOM.render(

        <div className="alert alert-danger ">
           <ProductList/> 
        </div>, 
        document.getElementById('root'));