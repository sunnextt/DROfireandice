import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { appReducer, BooksActions, IActionType } from './reducer';

export interface Icharacters {
   aliases: string;
   culture: string;
   died: string;
   father: string;
   gender: string;
   mother: string;
   name: string;
   spouse: string;
   id: string | number;
}

export interface Ibooks {
   released: string;
   name: string;
   publisher: string;
   isbn: string;
   authors: string;
   characters: string[];
   povCharacters: string[];
   numberOfPages: Number;
   url: string;
   country: string;
   mediaType: string;
}

export type InitialStateType = {
   books: Ibooks[];
   characters: Icharacters[];
};

const initialState = {
   books: [],
   characters: []
};

type Tchildren = ReactNode;

export const AppContext = createContext<{
   state: InitialStateType;
   dispatch: Dispatch<IActionType | BooksActions>;
}>({ state: initialState, dispatch: () => null });

const AppProvider = ({ children }: { children: Tchildren }) => {
   const [state, dispatch] = useReducer(appReducer, initialState);

   return (
      <>
         <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
      </>
   );
};

export default AppProvider;
