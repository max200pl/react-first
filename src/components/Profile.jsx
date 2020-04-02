import React from 'react';  //импорт файлов react с node_modules 

const Profile = () => {
     return (
          <div className="main">
               <div>
                    <img src="https://pbs.twimg.com/media/EBisJ9LXUAAeAIW.jpg" alt="" />
               </div>
               <div>
                    ava + descriptions
               </div>
               <div>
                    My post
                </div>
          </div>
     );
}

export default Profile;   // экспортируем компонента в общую среду 
