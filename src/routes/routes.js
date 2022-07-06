import React from 'react';
import ToDoPage from '../pages/toDo/toDoPage';
import RoutesPlay from '../pages/routesPlay/RoutesPlay';
import HomePage from '../pages/home/homePage';
import NotFound from '../pages/not-found/NotFound';
import RoutesPlayOpened from '../pages/routesPlay/RoutesPlayOpened';

const routes = [
  {
    path: '/',
    element: <HomePage/>,
    title: 'Home',
    inMenu: true,
  },
  {
    path: 'todo',
    element: <ToDoPage/>,
    title: 'toDo',
    inMenu: true,
  },
  {
    path: 'routesPlay',
    element: <RoutesPlay/>,
    title: 'play with route',
    inMenu: true,
  },
  {
    path: 'routesPlay/:id',
    element: <RoutesPlayOpened/>,
    title: null,
    inMenu: false,
  },
  {
    path: 'weather',
    element: <NotFound/>,
    title: 'weather',
    inMenu: true,
  },
  {
    path: '*',
    element: <NotFound/>,
    title: null,
    inMenu: false,
  },
];

export default routes;