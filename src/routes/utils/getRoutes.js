import { Route, NavLink } from 'react-router-dom';

export const getRoutes = (r) => {
 return r.map(item => {
    return <Route path={item.path}
      key={`route ${item.title}`} 
      element={item.element}/>
  })
};

export const getNav = (r) => {
  const filtredRoutes = r.filter((item) => {
    return item.inMenu;
  });

  return filtredRoutes.map(item => {
    return <NavLink
      key={`navLink ${item.title}`} 
      className={({isActive}) => isActive ? 'menu__item menu__item_active' : 'menu__item'} 
      to={item.path}
      rel="noopener noreferrer">
        {item.title}
      </NavLink>
  })
};