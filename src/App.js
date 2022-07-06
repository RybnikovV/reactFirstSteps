import { getRoutes, routes } from './routes';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          {getRoutes(routes)}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
