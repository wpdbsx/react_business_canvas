
import { produce } from "immer";
import { PostType } from "../types/types";
// import { faker } from "@faker-js/faker";


type InitialStateType = {
  mainPosts: PostType[];
  selectedPost: PostType | null;
  addUrlLoading: boolean,
  addUrlDone: boolean,
  addUrlError: string | null,
  addImageLoading: boolean,
  addImageDone: boolean,
  addImageError: string | null,
};

type ActionType = {
  type: string;
  data: string;
  viewName: string;
  postId?: number;
  status?: "url" | "image"
  post?: PostType;
  error: string | null
}

export type PostState = ReturnType<typeof reducer>;


const initialState: InitialStateType = {
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
  addUrlLoading: false,
  addUrlDone: false,
  addUrlError: null,
  addImageLoading: false,
  addImageDone: false,
  addImageError: null,
};


export const ADD_IMAGE_REQUEST = "ADD_IMAGE_REQUEST";
export const ADD_IMAGE_SUCCESS = "ADD_IMAGE_SUCCESS";
export const ADD_IMAGE_FAILURE = "ADD_IMAGE_FAILURE";

export const ADD_URL_REQUEST = "ADD_URL_REQUEST";
export const ADD_URL_SUCCESS = "ADD_URL_SUCCESS";
export const ADD_URL_FAILURE = "ADD_URL_FAILURE";

export const PATCH_POST = "PATCH_POST";
export const SELECT_POST = "SELECT_POST";
export const REMOVE_POST = "REMOVE_POST"
export const SELECT_REMOVE_POST = "SELECT_REMOVE_POST";

export const RESET_URL_STATUS = "RESET_URL_STATUS"
export const RESET_IMAGE_STATUS = "RESET_URL_STATUS"

const reducer = (state = initialState, action: ActionType) => {
  return produce(state, (draft) => {
    let selectedPost // 선택된 콘텐츠
    let newPostId // 새로운 포스트 아이디
    switch (action.type) {
      case ADD_IMAGE_REQUEST:
        draft.addImageLoading = true;
        draft.addImageDone = false;
        draft.addImageError = null;
        break;
      case ADD_IMAGE_SUCCESS:
        draft.addImageLoading = false;
        draft.addImageDone = true;
        draft.addImageError = null;
        newPostId = draft.mainPosts.length;
        draft.mainPosts = [{
          content: action.data,
          viewName: action.viewName,
          postId: newPostId,
          status: 'image'
        }, ...draft.mainPosts]
        break;
      case ADD_IMAGE_FAILURE:
        draft.addImageLoading = false;
        draft.addImageDone = false;
        draft.addImageError = action.error;
        break;

      case ADD_URL_REQUEST:
        draft.addUrlLoading = true;
        draft.addUrlDone = false;
        draft.addUrlError = null;
        break;
      case ADD_URL_SUCCESS:
        draft.addUrlLoading = false;
        draft.addUrlDone = true;
        draft.addUrlError = null;
        newPostId = draft.mainPosts.length
        draft.mainPosts = [{
          content: action.data,
          viewName: action.data,
          postId: newPostId,
          status: 'url'
        }, ...draft.mainPosts]
        break;
      case ADD_URL_FAILURE:
        draft.addUrlLoading = false;
        draft.addUrlDone = false;
        draft.addUrlError = action.error;
        break;


      case PATCH_POST:
        selectedPost = draft.mainPosts.find((v) => v.postId === action.postId);
        if (selectedPost) {
          selectedPost.viewName = action.data
        }
        break;
      case SELECT_POST:
        draft.selectedPost = action.post as PostType
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
      case RESET_URL_STATUS:
        draft.addUrlError = null
        draft.addUrlDone = false
        break;
      case RESET_IMAGE_STATUS:
        draft.addImageDone = false
        draft.addImageError = null
        break;



      default:
        break;
    }
  });
};

export default reducer;
