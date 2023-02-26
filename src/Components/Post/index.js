import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

   return (
      <div>
         <input
            type="text"
            value={props.value}
            onChange={(e) => props.onAddTextValue(e.target.value)}
         /><br />
         <button onClick={props.submitPost}>add post</button><br />
         {props.posts.map(el => <div>{el.text}</div>)}
      </div>
   )
}
export default Post;