const ADD_POST = "ADD_POST";
const ADD_TEXT_VALUE = "ADD_TEXT_VALUE";

type PostsArr = {
   id: number,
   text: string
}
const initialState = {
   posts: [
      { id: 1, text: 'Hellow' },
      { id: 2, text: 'Cześć' },
      { id: 3, text: 'Sieg heil' },
      { id: 4, text: 'Ca va!' },
   ] as Array<PostsArr>,
   postTextValue: 'ddsdsds' as string,
}
type initialStateType = typeof initialState;

const postReducer = (state = initialState, action: any): initialStateType => {
   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            postTextValue: '',
            posts: [...state.posts, { id: state.posts.length, text: state.postTextValue }],
         };

      case ADD_TEXT_VALUE:
         return {
            ...state,
            postTextValue: action.text
         };

      default:
         return state;
   }
}

type addPostACType = { type: typeof ADD_POST }
export const addPostAC = (): addPostACType => {
   return { type: ADD_POST }
}
type addTextValueACType = { type: typeof ADD_TEXT_VALUE, text: string }
export const addTextValueAC = (text: string): addTextValueACType => {
   return { type: ADD_TEXT_VALUE, text: text }
}

export default postReducer;