import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store'
import App from './App';
import {BrowserRouter} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));


export default function TokenTableComponent({items=[  {id: 1, name: 'Pyshky.net', status: 'green', type: 'TRST', conditions: 'x2,6 months', volume: 120000, roi: 4, free: 20, hedge: 20},
{id: 1412, name: 'Web3 P2P University', status: 'green', type: 'TRST', conditions: 'x2,1 years', volume: -100, roi: 6, free: 1, hedge: 0},
{id: 2, name: 'NFT-Flowershop', status: 'yellow', type: 'THT', conditions: 'x4,2 years', volume: 80000, roi: 23, free: 12, hedge: 0},
{id: 4, name: 'Web3 P2P University', status: 'red', type: 'TRST', conditions: 'x2,1 years', volume: 200000, roi: 6, free: 1, hedge: 0},
{id: 14, name: 'Web3 P2P University', status: 'red', type: 'TRST', conditions: 'x2,1 years', volume: 100, roi: 6, free: 1, hedge: 0},
], onFilter=(filterItems) => console.log(filterItems),   onBuy=()=>{}, filters={
  status: null, 
  type: null
}}) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App items={items} 
            filters={filters}   
            onFilter={onFilter}
            onBuy={onBuy}
        />
      </Provider>
    </BrowserRouter>
  )
}

root.render(
  <>
    <TokenTableComponent/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

