import {useState, useEffect} from 'react'
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
 
   const [allHoldings, setallHoldings] = useState([]);

   useEffect(() =>{
      axios.get("/allHoldings").then((res) => {
        console.log(res.data)
        setallHoldings(res.data);
      })
   }, []);

   const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "pink",
      },
    ],
  };



  return (
    <>
    <h3 className='title'>Holdings ({allHoldings.length})</h3>
    <div className='order-table'>
      <table>
        <tr className='item'>
          <th>Instrument</th>
          <th>Qty.</th>
          <th>Avg. cost</th>
          <th>LTP</th>
          <th>Cur. val</th>
          <th>Net chg.</th>
          <th>Day chg.</th>
        </tr>

        {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
         <tr key={index} className='item'>
          <td>{stock.name}</td>
          <td>{stock.qty}</td>
          <td>{stock.avg.toFixed(2)}</td>
          <td>{stock.price.toFixed(2)}</td>
          <td>{curValue.toFixed(2)}</td>
          <td className={profClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
          <td className={profClass}>{stock.net}</td>
          <td className={dayClass}>{stock.day}</td>
        </tr>
            )
        })}
      </table>
    </div>

    <div className='row'>
      <div className='col'>
        <h5>
          76,885. <span>55</span>{" "}
        </h5>
        <p>Total Investment</p>
      </div>
       <div className='col'>
        <h5>
          15,484. <span>48</span>{" "}
        </h5>
        <p>Current Value</p>
      </div>
       <div className='col'>
        <h5>
          31,674.40 (+3.61) <span>31</span>{" "}
        </h5>
        <p>P&L</p>
      </div>
    </div>

    <div style={{ marginTop: "5%", maxWidth: "800px" }}>
      <VerticalGraph data={data} />
    </div>
    </>
  )
}

export default Holdings
