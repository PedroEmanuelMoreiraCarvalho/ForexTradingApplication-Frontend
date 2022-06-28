import '../App.css';
export interface HomePageProps{}

const HomePage:React.FunctionComponent<HomePageProps> = () => {
  return (
    <div>
      <div className='top-bar'>
        <div className='top-bar-left'>
          <button id='menu-button'></button>
          <h1>Forex Trading App</h1>
        </div>
        <div className='user-info'>
          <button id='deposit-button'>Deposit</button>
          <h3>US$ 2432.34</h3>
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