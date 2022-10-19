import React, { createContext, useState, ReactNode } from 'react';
import { IsearchBox } from 'src/components/SearchBox';

//CREATE SEARCH INTERFACE AND CHILDREN TYPE
type TsearchInput = string;
type Tchildren = ReactNode;

export interface IsearchContext extends IsearchBox {
   searchResults: any;
   searchInput: TsearchInput;
   setBooks: any;
}

// CREATE SEARCH PROVIDER AND SEARCH CONTEXT
export const SearchContext = createContext<any>([]);

export function SearchProvider({ children }: { children: Tchildren }) {
   const [searchResults, setSearchResults] = useState();
   const [searchInput, setSearchInput] = useState<TsearchInput>('');
   const [books, setBooks] = useState([]);

   const initValue = {
      searchResults,
      searchInput,
      setBooks,
      setSearchResults,
      setSearchInput,
      books
   };

   return (
      <>
         <SearchContext.Provider value={initValue}>{children}</SearchContext.Provider>
      </>
   );
}
