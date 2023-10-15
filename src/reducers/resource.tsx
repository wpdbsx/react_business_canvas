
import { produce } from "immer";
// import { faker } from "@faker-js/faker";

type initialStateType = {
  mainContents: string[];
};

type actionType = {
  type: string;
  data: string;
}

export type postState = ReturnType<typeof reducer>;


const initialState: initialStateType = {
  mainContents: ['https://www.robinwieruch.de/react-libraries/',
    'https://typed.do/blog-kr/how-to-make-good-usability-product/'],
};

export const ADD_CONTENT = "ADD_CONTENT";



const reducer = (state = initialState, action: actionType) => {
  return produce(state, (draft) => {

    switch (action.type) {
      case ADD_CONTENT:
        draft.mainContents = [action.data, ...draft.mainContents]
        break;

      default:
        break;
    }
  });
};

export default reducer;
