import React from 'react';  //импорт файлов react с node_modules 
import s from './Profile.module.css';

const Profile = () => {
     return (
          <div className={s.main}>
               <div>
                    <img src="https://pbs.twimg.com/media/EBisJ9LXUAAeAIW.jpg" alt="" />
               </div>
               <div>
                    ava + descriptions
               </div>
               <div className={s.posts}>
                    <div className={s.item}>
                         post 1
                    </div>
                    <div className={s.item}>
                         post 2
                    </div>
               </div>
          </div>
     );
}

export default Profile;   // экспортируем компонента в общую среду 
