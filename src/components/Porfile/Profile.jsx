import React from 'react';  //импорт файлов react с node_modules 
import s from './Profile.module.css';
import Myposts from './Myposts/Myposts';

const Profile = () => {
     return (
          <div className={s.content}>
               <div>
                    <img src="https://pbs.twimg.com/media/EBisJ9LXUAAeAIW.jpg" alt="" />
               </div>
               <div>
                    ava + descriptions
               </div>

               <Myposts />
          </div>

     );
}

export default Profile;   // экспортируем компонента в общую среду 
