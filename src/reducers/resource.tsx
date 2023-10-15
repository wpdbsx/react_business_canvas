
import { produce } from "immer";
// import { faker } from "@faker-js/faker";

type postType = {
  content: string,
  postId: number,
}
type initialStateType = {
  mainPosts: postType[];
};

type actionType = {
  type: string;
  data: string;
  postId: number;
}

export type postState = ReturnType<typeof reducer>;


const initialState: initialStateType = {
  mainPosts: [{
    content:
      'https://www.robinwieruch.de/react-libraries/',
    postId: 0
  },
  {
    content:
      'https://typed.do/blog-kr/how-to-make-good-usability-product/',
    postId: 1
  }
  ],
};

export const ADD_CONTENT = "ADD_CONTENT";


export const PATCH_CONTENT = "PATCH_CONTENT";



const reducer = (state = initialState, action: actionType) => {
  return produce(state, (draft) => {

    switch (action.type) {
      case ADD_CONTENT:
        const newContentId = draft.mainPosts.length
        draft.mainPosts = [{ content: action.data, postId: newContentId }, ...draft.mainPosts]
        break;
      case PATCH_CONTENT:
        const selectedContent = draft.mainPosts.find((v) => v.postId === action.postId);
        if (selectedContent) {
          selectedContent.content = action.data
        }
        break;
      default:
        break;
    }
  });
};

export default reducer;
