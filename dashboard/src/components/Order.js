import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Order = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("/allOrders").then((res) => {
      console.log(res.data);
      setAllOrders(res.data);
    });
  }, []);

  return (
    <>
      <h3 className='title'>Orders ({allOrders.length})</h3>

      <div className='order-table'>
        <table>
          <tr className='item'>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((order, index) => {
            const modeClass = order.mode === "BUY" ? "profit" : "loss";
            return (
              <tr key={index} className='item'>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price.toFixed(2)}</td>
                <td className={modeClass}>{order.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Order;
