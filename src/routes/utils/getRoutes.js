import { Route, Routes, NavLink } from 'react-router-dom';

export const getRoutes = (r) => {
  const res = r.map(item => {
    return <Route path={item.path} key={`route ${item.title}`} element={item.element}/>
  })

  return <Routes>
    {res}
  </Routes>
};

export const getNav = (r) => {
  return  r.map(item => {
    return <NavLink
      key={`navLink ${item.title}`} 
      className="App-link menu__item" 
      to={item.path}
      rel="noopener noreferrer">
        {item.title}
      </NavLink>
  })
};