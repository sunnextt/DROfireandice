import { useEffect, useContext } from 'react';
import Layout from './components/Layout';
import './styles/main.css';
import Home from './view/home';
import { Routes, Route } from 'react-router-dom';
import Books from './view/books/index';
import Characters from './view/characters';
import { getBooksApi, getCharactersApi } from './services/api';
import getSearchCharactersArray from './utils/getSearchCharactersArray';
import { SearchContext } from 'src/context/searchContext';
import { ActionType } from './context/reducer';
import { AppContext } from './context/context';

const App = (): JSX.Element => {
   const { dispatch } = useContext(AppContext);

   let { searchResults, searchInput, setSearchResults, setBooks } = useContext(SearchContext);

   const pageParam = 1;

   // APIs CALL LOGIC TO GET json DATA THEN
   //IMPLEMENT SEARCH
   useEffect(() => {
      async function showBooksAndCharacters() {
         const charactersResponse = await getCharactersApi(pageParam);
         const books = await getBooksApi(pageParam);
         const { data: characters } = charactersResponse;

         // eslint-disable-next-line @typescript-eslint/no-unused-vars
         const CharactersFiterResult = getSearchCharactersArray({
            characters,
            searchInput
         });

         setBooks(books);
         setSearchResults(books);
      }

      showBooksAndCharacters();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   //dispatch books data to store
   useEffect(() => {
      if (searchResults) {
         dispatch({ type: ActionType.ADDBOOKS, payload: searchResults });
      }
   }, [dispatch, searchResults]);

   return (
      <div className="">
         <Routes>
            <Route
               path="/"
               element={
                  <Layout>
                     <Home />
                  </Layout>
               }
            />
            <Route
               path="/books"
               element={
                  <Layout>
                     <Books />
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
