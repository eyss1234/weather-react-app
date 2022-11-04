import './App.css';
import Weather from './Weather';
import Search from './Search'

function App() {
  return (
    <div className="App">
      <Search />
      <Weather
      city="London"
      currentTime="12:15 pm"
      currentDate="Friday, Sep "
      mainTemp={35}
      />
    </div>
  );
}

export default App;
