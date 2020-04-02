import React from 'react';  //импорт файлов react с node_modules
import s from './Header.module.css';

const Header = () => {
     return (
          <header className={s.header}>
               <img src="https://mymedicaremadesimple.com/wp-content/uploads/2019/04/IMG-Logo-2016-new.png" alt="" />
          </header>
     );
}

export default Header;   // экспортируем компонента в общую среду 
