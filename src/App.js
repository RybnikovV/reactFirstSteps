import { getRoutes, getNav, routes } from './routes';


import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='menu'>
          {getNav(routes)}
        </div>
          {getRoutes(routes)}
      </header>
    </div>
  );
};

export default App;
