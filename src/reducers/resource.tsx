
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
  addPostLoading: boolean,
  addPostDone: boolean,
  addPostError: string | null,
};

type actionType = {
  type: string;
  data: string;
  postId?: number;
  status?: "url" | "image"
  post?: postType;
  error: string | null
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
  selectedPost: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE"
export const PATCH_POST = "PATCH_POST";
export const SELECT_POST = "SELECT_POST";
export const REMOVE_POST = "REMOVE_POST"
export const SELECT_REMOVE_POST = "SELECT_REMOVE_POST";

const reducer = (state = initialState, action: actionType) => {
  return produce(state, (draft) => {
    let selectedPost // 선택된 콘텐츠
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.addPostError = null;
        const newPostId = draft.mainPosts.length
        draft.mainPosts = [{ content: action.data, viewName: action.data, postId: newPostId, status: action.status }, ...draft.mainPosts]
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostDone = false;
        draft.addPostError = action.error;
        break;
      case PATCH_POST:
        selectedPost = draft.mainPosts.find((v) => v.postId === action.postId);
        if (selectedPost) {
          selectedPost.viewName = action.data
        }
        break;
      case SELECT_POST:
        draft.selectedPost = action.post as postType
        break;
      case SELECT_REMOVE_POST:
        draft.selectedPost = null
        break;
      case REMOVE_POST:
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
