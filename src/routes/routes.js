import React from 'react';
import ToDoPage from '../pages/toDo/toDoPage';
import NextLessonProjectPage from '../pages/nextLessonProject/nextLessonProject';
import HomePage from '../pages/home/homePage';
import NotFound from '../pages/not-found/NotFound';

const routes = [
  {
    path: '/',
    element: <HomePage/>,
    title: 'Home',
  },
  {
    path: '/todo',
    element: <ToDoPage/>,
    title: 'toDo',
  },
  {
    path: '/nextProject',
    element: <NextLessonProjectPage/>,
    title: 'another project...',
  },
  {
    path: '*',
    element: <NotFound/>,
    title: '',
  },
];

export default routes;