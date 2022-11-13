import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className='container mt-5'>
            <Weather
            defaultCity="London"
            />
        <footer>
          <p className='p-2'><a href="https://github.com/eyss1234/weather-react-app">Open-source code</a>, by Emily Sato</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
