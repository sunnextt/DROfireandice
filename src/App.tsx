import { useEffect, useContext } from 'react';
import Layout from './components/Layout';
import './styles/main.css';
import Home from './view/home';
import { Routes, Route } from 'react-router-dom';
import Books from './view/books/index';
import Characters from './view/characters';
import { addBooks } from './store/slice/bookSlice';
import { useAppDispatch } from './store/hooks';
import { getBooks, getCharacter } from './services/api';
import getSearchCharactersArray from './utils/getSearchCharactersArray';
import { SearchContext } from 'src';

const App = (): JSX.Element => {
   const dispatch = useAppDispatch();
   let { searchResults, searchInput, setSearchResults, setBooks } = useContext(SearchContext);

   const pageParam = 1;

   // APIs CALL LOGIC TO GET json DATA THEN
   //IMPLEMENT SEARCH
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   //dispatch books data to store
   useEffect(() => {
      dispatch(addBooks(searchResults));
   }, [dispatch, searchResults]);

   return (
      <div className="">
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
