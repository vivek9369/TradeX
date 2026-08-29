import React from 'react'
import { Routes, Route } from "react-router-dom";
import WatchList from './WatchList'
import Summary from './Summary'
import Order from './Order'
import Holdings from './Holdings'
import Positions from './Positions'
import Funds from './Funds'
import App from './App'
import { GeneralContextProvider } from './GeneralContext';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className='content'>
    <Routes>
      <Route  path='/' element={<Summary/>}/>
      <Route path="/orders" element={<Order />} />
      <Route path="/holdings" element={<Holdings />} />
      <Route path="/positions" element={<Positions />} />
      <Route path="/funds" element={<Funds />} />
      <Route path="/App" element={<App />} />
    
    </Routes>
      </div>
    </div>
  )
}

export default Dashboard
