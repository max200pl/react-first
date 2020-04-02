import React from 'react';  //импорт файлов react с node_modules
import s from './Header.module.css';

const Header = () => {
     return (
          <header className={s.header}>
               <img src="https://lh3.googleusercontent.com/proxy/iYGw7eR5K3fcQZc-5hu2DIEaiu7zugFhF0TkC0s1a_nGUS_bBViyBeyHwH7z1KsqQy3B_GYdBkx_j82FaVnuR0oYg2Mo4NOWQACcMH1IQRDoQQVUIYYTVg" alt="" /><header />
          </header>
     );
}

export default Header;   // экспортируем компонента в общую среду 
