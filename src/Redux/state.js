import postReducer from './Reducers/post-reducer'

const store = {
   _state: {
      postPage: {
         posts: [
            { id: 1, text: 'Hellow' },
            { id: 2, text: 'Checht' },
            { id: 3, text: 'Sieg heil' },
            { id: 4, text: 'Ca va!' },
         ],
         postTextValue: 'ddsdsds',
      }
   },
   _rerenderAllTree() {
      console.log('хуй')
   },
   subscribe(observer) {
      this._rerenderAllTree = observer;
   },
   getState() {
      return this._state;
   },

   dispatch(action) {
      postReducer(this._state.postPage, action);

      this._rerenderAllTree();

   }
}

//export default store;