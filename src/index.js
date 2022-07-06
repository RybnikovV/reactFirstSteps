import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

import './index.css';

ReactDOM.render(
  <Router>
    <Theme preset={presetGpnDefault}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Theme>
  </Router>,
  document.getElementById('root')
);


//Согласование reconciliation
//Отрисовка render

//изменение состояния с помощью хука useState(startPosition,setStartPosition)
// useRef()

//let cash = useMemo(callback, deps[])
//useEffect(callback, deps[]) - если callBack возращает функцию, она будет выполнена в момент удаления компонента


//Жизменный цикл компонента
// mount - подгрузка данных, повесить слушатели события
// update - 
// unmount - отписываемся, 