import React from 'react';
import { getNav, routes } from '../../routes';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header className="App-header">
        <div className='menu'>
          {getNav(routes)}
        </div>
      </header>
      <main className="App-main">
        <Outlet />
      </main>
    </>
  )
}

export default Layout;