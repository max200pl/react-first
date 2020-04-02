/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';  //импорт файлов react с node_modules 
import s from './Navbar.module.css';

const Navbar = () => {
     return (
          <nav className={s.nav}>
               <div className={`${s.item} ${s.active}`} >
                    <a>Profile</a>
               </div>

               <div className={s.item}>
                    <a>Message</a>
               </div>

               <div className={s.item}>
                    <a>News</a>
               </div>

               <div className={s.item}>
                    <a>Music</a>
               </div>

               <div className={s.item}>
                    <a>Sattings</a>
               </div>
          </nav>
     );
}

export default Navbar;   // экспортируем компонента в общую среду 
