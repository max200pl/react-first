
import React from 'react';  //импорт файлов react с node_modules 
import s from './Post.module.css';

const Post = () => {
     return (

          <div className={s.Post}>
               <div className={s.item}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLjNY8drx6OYdX5tkqau_JmjVNFQ5kSpoyDvIVn5ZoMzFu5bGU&usqp=CAU" alt="" />
                    post 1
               </div>

               <div>
                    <span>1 like</span>
               </div>
          </div>
     );
}

export default Post;   // экспортируем компонента в общую среду 
