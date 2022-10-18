import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
   books: [],
   characters: []
};

const booksCharactersSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addBooks: (state, action: PayloadAction<any>) => {
         const books = action.payload;
         books?.map((itemd: never) => {
            state.books.push(itemd);
            return itemd;
         });
      },
      addCharacters: (state, action: PayloadAction<any>) => {
         const data = action.payload;
         state.characters = data;
      }
   }
});

const { reducer, actions } = booksCharactersSlice;

export const { addBooks, addCharacters } = actions;

export type RootState = ReturnType<typeof reducer>;

export default reducer;
