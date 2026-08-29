import { useState, useContext } from 'react'
import {Tooltip, Grow} from '@mui/material';
import { watchlist } from '../data/data';
import {BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz} from '@mui/icons-material'
import GeneralContext from './GeneralContext';
import { DoughnutChart } from './DoughnoutChart';



const WatchList = () => {
  const upCount = watchlist.filter((s) => !s.isDown).length;
  const downCount = watchlist.filter((s) => s.isDown).length;

  const doughnutData = {
    labels: ["Gaining", "Declining"],
    datasets: [
      {
        data: [upCount, downCount],
        backgroundColor: ["rgba(103, 201, 136, 0.85)", "rgba(223, 73, 73, 0.85)"],
        borderColor: ["#67c988", "#df4949"],
        borderWidth: 1.5,
      },
    ],
  };

  return (
    <div className='watchlist-container'>
      <div className='search-container'>
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Search eg: infy, bse, nifty fut weekly, gold mcx'
          className='search'
        />
        <span className='counts'>{watchlist.length}/ 50</span>
      </div>

      <ul className='list'>
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      {/* Doughnut chart below the watchlist */}
      <div className='watchlist-chart'>
        <p className='watchlist-chart-title'>Market Pulse</p>
        <DoughnutChart data={doughnutData} />
        <div className='watchlist-chart-legend'>
          <span style={{ color: '#67c988' }}>▲ {upCount} Gaining</span>
          <span style={{ color: '#df4949' }}>▼ {downCount} Declining</span>
        </div>
      </div>
    </div>
  );
};

export default WatchList;

 
const WatchListItem = ({stock}) => {
const [showWatchListActions, setshowWatchListActions ] = useState(false);

const handleMouseEnter = (e) =>{
  setshowWatchListActions (true);
}


const handleMouseExit = (e) =>{
  setshowWatchListActions (false);
 
 }

 return (
  <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
    <div className='item'>
      <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

    <div className='item-info'>
      <span className='percent'>{stock.percent}</span>
      {stock.isDown ? (
        <KeyboardArrowDown sx={{ color: '#e74c3c', fontSize: '1.1rem' }} />
      ) : (
        <KeyboardArrowUp sx={{ color: '#27ae60', fontSize: '1.1rem' }} />
      )}
      <span className='percent'>{stock.price}</span>
    </div>

    </div>
    {showWatchListActions && <WatchlistAction uid={stock.name}/>}
  </li>
 );
};

const WatchlistAction = ({uid}) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className='actions' style={{ display: 'flex' }}>
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className='buy' onClick={handleBuyClick}>Buy</button>
        </Tooltip>

        <Tooltip title="Sell (SS)" placement="top" arrow TransitionComponent={Grow}>
          <button className='sell'>Sell</button>
        </Tooltip>

        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button className='action'>
            <BarChartOutlined className='icon'/>
          </button>
        </Tooltip>

        <Tooltip title="More(M)" placement="top" arrow TransitionComponent={Grow}>
          <button className='action'>
            <MoreHoriz className='icon'/>
          </button>
        </Tooltip>
      </span>
    </span>
  );
};