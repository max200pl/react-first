import React from 'react';  //импорт файлов react с node_modules 

import './App.css';

import Header from './Header';
import Technologies from './Technologies';


// App компонента стрелочна функция которая возвращает JSX разметку 
// App компонента это тег <App/> 
const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
}


export default App;   // экспортируем компонента в общую среду 
