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
import { getBooks } from './services/api';

const App = (): JSX.Element => {
   const dispatch = useAppDispatch();

   const [books, setBooks] = useState();
   const [searchResults, setSearchResults] = useState();

   const pageParam = 1;

   useEffect(() => {
      getBooks(pageParam).then((json) => {
         setBooks(json);
         setSearchResults(json);
      });
   }, []);

   //dispatch books data to store
   useEffect(() => {
      dispatch(addBooks(searchResults));
   }, [dispatch, searchResults]);

   return (
      <div className="">
         <SearchBox books={books} setSearchResults={setSearchResults} />
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
