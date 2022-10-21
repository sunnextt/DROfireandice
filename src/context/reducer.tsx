import { InitialStateType } from './context';

// An enum with all the types of actions to use in our reducer
export enum ActionType {
   ADDBOOKS = 'ADD_BOOKS',
   ADDCHARACTERS = 'ADD_CHARACTERS'
}

export interface IActionType {
   type: ActionType;
   payload: [];
}

export type ActionMap<M extends { [index: string]: any }> = {
   [Key in keyof M]: M[Key] extends undefined
      ? {
           type: Key;
        }
      : {
           type: Key;
           payload: M[Key];
        };
};

export type BooksActions = ActionMap<IActionType>[keyof ActionMap<IActionType>];

const appReducer = (state: InitialStateType, action: IActionType | BooksActions) => {
   const { type, payload } = action;
   switch (type) {
      case ActionType.ADDBOOKS:
         console.log(payload);
         return {
            ...state,
            books: payload
         };
      case ActionType.ADDCHARACTERS:
         return { ...state, payload };
      default:
         return state;
   }
};

export default appReducer;
