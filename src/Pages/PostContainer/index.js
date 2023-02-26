import React from 'react';
import { addPostAC, addTextValueAC } from '../../Redux/Reducers/post-reducer';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../../Components/Post';

const PostContainer = (props) => {
   //dispatch - ф-ия, которая передаёт текущее состояние и передает действие через редьюсер
   const dispatch = useDispatch();

   //хук useSelector возвращает состояние
   const value = useSelector(el => el.postReducer.postTextValue);
   const posts = useSelector(el => el.postReducer.posts);

   const submitPost = () => {
      dispatch(addPostAC());
   }
   const onAddTextValue = (text) => {
      dispatch(addTextValueAC(text));
   }

   return (
      <Post
         posts={posts}
         value={value}
         onAddTextValue={onAddTextValue}
         submitPost={submitPost}
      />
   )
}
export default PostContainer;