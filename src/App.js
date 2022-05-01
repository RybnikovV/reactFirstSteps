import { Route, Routes, NavLink } from 'react-router-dom';
import ToDoPage from './pages/toDo/toDoPage';
import NextLessonProjectPage from './pages/nextLessonProject/nextLessonProject';
import HomePage from './pages/home/homePage';

import './App.scss';

export default App;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='menu'>
          <NavLink
            className="App-link menu__item"
            to="./"
            rel="noopener noreferrer"
          >
            Home
          </NavLink>
          <NavLink
            className="App-link menu__item"
            to="./toDo"
            rel="noopener noreferrer"
          >
            toDo
          </NavLink>
          <NavLink
            className="App-link menu__item"
            to="/nextProject"
            rel="noopener noreferrer"
          >
            another project...
          </NavLink>
        </div>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/todo' element={<ToDoPage/>}/>
          <Route path='/nextProject' element={<NextLessonProjectPage/>}/>
        </Routes>
      </header>
    </div>
  );
}
