import { Dispatch } from 'react';
import { getBooksApi, getCharactersApi } from 'src/services/api';
import { ActionType, BooksActions, IActionType } from './reducer';

const getBooks = (dispatch: Dispatch<IActionType | BooksActions>) => {
   return async ({ pageParam }: { pageParam: number }) => {
      const response = getBooksApi(pageParam);
      const data = await response;

      // dispatch({ type: ActionType.ADDBOOKS, payload: data });
      return data;
   };
};

const getCharacters = (dispatch: Dispatch<IActionType | BooksActions>) => {
   return async ({ pageParam }: { pageParam: number }) => {
      const res = getCharactersApi(pageParam);
      const { data } = await res;

      dispatch({ type: ActionType.ADDCHARACTERS, payload: data });
      return data;
   };
};

export { getBooks, getCharacters };
