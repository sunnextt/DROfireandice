import React, { createContext, useState, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import store from './store';

import reportWebVitals from './reportWebVitals';
import { IsearchBox } from './components/SearchBox';
import App from './App';

const queryClient = new QueryClient();


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


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <BrowserRouter>
      <Provider store={store}>
         <SearchProvider>
            <QueryClientProvider client={queryClient}>
               <App />
            </QueryClientProvider>
         </SearchProvider>
      </Provider>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
