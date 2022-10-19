import React from 'react';
import BookCard, { CardProps } from 'src/components/Card/BookCard';

const Books = ({ searchResults = [] }) => {
   return (
      <div>
         <h3 className="text-4xl font-bold text-center my-8">
            List of Books by George R.R. Martin
         </h3>
         <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {searchResults
               ? searchResults.map((x: CardProps) => <BookCard key={x.name} cardData={x} />)
               : 'No Data'}
         </div>
      </div>
   );
};

export default Books;
