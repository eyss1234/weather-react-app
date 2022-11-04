import logo from './logo.svg';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
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
