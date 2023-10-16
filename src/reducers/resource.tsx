
import { produce } from "immer";
// import { faker } from "@faker-js/faker";

export type postType = {
  content: string,
  viewName: string,
  postId: number,
  status?: "url" | "image"
}
type initialStateType = {
  mainPosts: postType[];
  selectedPost: postType | null;
};

type actionType = {
  type: string;
  data: string;
  postId?: number;
  status?: "url" | "image"
  post?: postType;
}

export type postState = ReturnType<typeof reducer>;


const initialState: initialStateType = {
  mainPosts: [{
    content:
      'https://www.robinwieruch.de/react-libraries/',
    viewName: 'https://www.robinwieruch.de/react-libraries/',
    postId: 0,
    status: "url",
  },
  {
    content:
      'https://typed.do/blog-kr/how-to-make-good-usability-product/',
    viewName: 'https://typed.do/blog-kr/how-to-make-good-usability-product/',
    postId: 1,
    status: "url",
  }
  ],
  selectedPost: null
};

export const ADD_CONTENT = "ADD_CONTENT";

export const PATCH_CONTENT = "PATCH_CONTENT";

export const SELECT_CONTENT = "SELECT_CONTENT";

export const REMOVE_CONTENT = "REMOVE_CONTENT"

export const SELECT_REMOVE_CONTENT = "SELECT_REMOVE_CONTENT";

const reducer = (state = initialState, action: actionType) => {
  return produce(state, (draft) => {
    let selectedPost // 선택된 콘텐츠
    switch (action.type) {
      case ADD_CONTENT:
        const newContentId = draft.mainPosts.length
        draft.mainPosts = [{ content: action.data, viewName: action.data, postId: newContentId, status: action.status }, ...draft.mainPosts]
        break;
      case PATCH_CONTENT:
        selectedPost = draft.mainPosts.find((v) => v.postId === action.postId);
        if (selectedPost) {
          selectedPost.viewName = action.data
        }
        break;
      case SELECT_CONTENT:
        draft.selectedPost = action.post as postType
        break;
      case SELECT_REMOVE_CONTENT:
        draft.selectedPost = null
        break;
      case REMOVE_CONTENT:
        draft.mainPosts = draft.mainPosts.filter((v) => v.postId !== action.postId);
        if (draft.selectedPost?.postId === action.postId) {
          draft.selectedPost = null;
        }
        break;
      default:
        break;
    }
  });
};

export default reducer;
