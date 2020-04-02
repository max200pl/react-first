
import React from 'react';  //импорт файлов react с node_modules 

import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

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
