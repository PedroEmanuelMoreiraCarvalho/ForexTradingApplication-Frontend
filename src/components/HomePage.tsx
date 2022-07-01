import { useContext, useEffect } from 'react';
import {useCookies} from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { UserContext } from '../contexts/userContext';
export interface HomePageProps{}

const HomePage:React.FunctionComponent<HomePageProps> = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies();
  const { user } = useContext(UserContext);

  useEffect(()=>{
    let user_cookie = cookies.user;
    if(!!!user_cookie){
      navigate("/login");
    }
  },[])

  return (
    <div>
      <div className='top-bar'>
        <div className='top-bar-left'>
          <button id='menu-button'></button>
          <h1>Forex Trading App</h1>
        </div>
        <div className='user-info'>
          <button id='deposit-button'>Deposit</button>
          <h3>{`US$ ${user.cash.toFixed(2)}`}</h3>
        </div>
      </div>
      <div className='trading-content'>
        <div data-testid='trading-component' className='trading-component'>
        trading component
        </div>
        <div className='trading-info'>
          <div data-testid='real-time-quotes' className='trading-quotes'>
            real time quotes
          </div>
          <div data-testid='trading-table' className='trading-table'>
            tranding table
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;