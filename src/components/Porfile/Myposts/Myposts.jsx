import React from 'react';  //импорт файлов react с node_modules 
import s from './Myposts.module.css';
import Post from './Post/Post';


const Myposts = () => {
     return (

          <div>
               My posts
               <div>
                    <textarea></textarea>
                    <button>Add posts</button>
               </div>

               <div className={s.posts}>

                    <Post message="hi, how are you" />
                    <Post message="It's my first post" />

               </div>
          </div>
     );
}

export default Myposts;   // экспортируем компонента в общую среду 
