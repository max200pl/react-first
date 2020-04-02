
import React from 'react';  //импорт файлов react с node_modules 

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Porfile/Profile';

// App компонента стрелочна функция которая возвращает JSX разметку 
// App компонента это тег <App/> 
const App = () => {
  return (
    <div className="app-wrapper">

      <Header />

      <Navbar />

      <Profile />

    </div>

  );
}


export default App;   // экспортируем компонента в общую среду 
