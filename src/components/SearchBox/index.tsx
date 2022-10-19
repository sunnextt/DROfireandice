import React from 'react';
import _ from 'lodash';
import getSearchResultsArray from '../../utils/getSearchResultsArray';
import { CardProps } from '../Card/BookCard';

interface IsearchBox {
   books: CardProps[];
   setSearchResults: any;
   setSearchInput: any;
}

const SearchBox = ({ books, setSearchResults, setSearchInput }: IsearchBox) => {
   const handleSubmit = (e: { preventDefault: () => void }) => e.preventDefault();

   const handleSearchChange = (e: { target: { value: string } }) => {
      if (!e.target.value) return setSearchResults(books);

      const { value } = e.target;
      const searchInput = _.lowerCase(value);
      setSearchInput(searchInput);
      

      const getSearchResultsprops = {
         books,
         searchInput
      };
      const newSearchResults = getSearchResultsArray(getSearchResultsprops);

      setSearchResults(newSearchResults);

   };

   return (
      <div className="absolute  top-0 left-[40rem] translate-y-[40%] translate-x-[50%]">
         <form className="flex items-center w-[15rem]" onSubmit={handleSubmit}>
            <label htmlFor="simple-search" className="sr-only">
               Search
            </label>
            <div className="relative w-full">
               <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                     aria-hidden="true"
                     className="h-5 w-5 text-gray-500 "
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                     ></path>
                  </svg>
               </div>
               <input
                  type="text"
                  id="simple-search"
                  className="block w-full rounded-lg border border-secondary bg-sky-50 p-2.5 pl-10 text-sm text-gray-900 outline-none hover:ring hover:ring-sky-300 focus:border-sky-500 focus:ring-sky-500"
                  placeholder="Search"
                  onChange={handleSearchChange}
                  required
               />
            </div>
            <button
               type="submit"
               className="ml-2 rounded-lg border border-secondary bg-secondary p-2.5 text-sm font-medium text-white hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-300"
            >
               <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
               </svg>
               <span className="sr-only">Search</span>
            </button>
         </form>
      </div>
   );
};

export default SearchBox;
