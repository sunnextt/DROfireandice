import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import './styles/main.css';
import Home from './view/home';
import { Routes, Route } from 'react-router-dom';
import Books from './view/books/index';
import Characters from './view/characters';
import SearchBox from './components/SearchBox';
import { addBooks } from './store/slice/bookSlice';
import { useAppDispatch } from './store/hooks';
import { getBooks, getCharacter } from './services/api';
import getSearchCharactersArray from './utils/getSearchCharactersArray';

type TsearchInput = string;

const App = (): JSX.Element => {
   const dispatch = useAppDispatch();

   const [books, setBooks] = useState([]);
   const [searchResults, setSearchResults] = useState();
   const [searchInput, setSearchInput] = useState<TsearchInput>('');

   const pageParam = 1;

   useEffect(() => {
      async function showBooksAndCharacters() {
         const characterPromise = getCharacter(pageParam);
         const booksPromise = getBooks(pageParam);

         const { data: characters } = await characterPromise;

         const CharactersFiterResult = getSearchCharactersArray({
            characters,
            searchInput
         });

         console.log(CharactersFiterResult);

         const books = await booksPromise;
         setBooks(books);
         setSearchResults(books);
      }

      showBooksAndCharacters();
   }, []);

   //dispatch books data to store
   useEffect(() => {
      dispatch(addBooks(searchResults));
   }, [dispatch, searchResults]);

   return (
      <div className="">
         <SearchBox
            books={books}
            setSearchResults={setSearchResults}
            setSearchInput={setSearchInput}
         />
         <Routes>
            <Route
               path="/"
               element={
                  <Layout>
                     <Home searchResults={searchResults} />
                  </Layout>
               }
            />
            <Route
               path="/books"
               element={
                  <Layout>
                     <Books searchResults={searchResults} />
                  </Layout>
               }
            />
            <Route
               path="/characters"
               element={
                  <Layout>
                     <Characters />
                  </Layout>
               }
            />
         </Routes>
      </div>
   );
};

export default App;
