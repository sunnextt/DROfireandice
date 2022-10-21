import React, { useContext } from 'react';
import BookCard from 'src/components/Card/BookCard';
import { AppContext, Ibooks } from 'src/context/context';

const Books = () => {
   const { state } = useContext(AppContext);

   const books = state.books;
   console.log(state);
   

   return (
      <div>
         <h3 className="text-4xl font-bold text-center my-8">
            List of Books by George R.R. Martin
         </h3>
         <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {books
               ? books.map((x: Ibooks, i: number) => (
                    <BookCard key={x.name + i} cardData={x} i={i} />
                 ))
               : 'No Data'}
         </div>
      </div>
   );
};

export default Books;
