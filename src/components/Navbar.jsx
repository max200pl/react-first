/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';  //импорт файлов react с node_modules 

const Navbar = () => {
     return (
          <nav className="nav">
               <div>
                    <a>Profile</a>
               </div>

               <div>
                    <a>Message</a>
               </div>

               <div>
                    <a>News</a>
               </div>

               <div>
                    <a>Music</a>
               </div>

               <div>
                    <a>Sattings</a>
               </div>
          </nav>
     );
}

export default Navbar;   // экспортируем компонента в общую среду 
