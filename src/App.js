import './App.css';
import Weather from './Weather';
import Search from './Search'

function App() {
  return (
    <div className='container mt-5'>
      <div className="App row">
        <div className='col-6'>
          <Search />
          </div>
        <div className='col-6'>
          <Weather
          city="London"
          currentTime="12:15 pm"
          currentDate="Friday, Sep "
          mainTemp={9}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
