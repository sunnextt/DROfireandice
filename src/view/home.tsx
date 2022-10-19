import React from 'react';

import BookCard, { CardProps } from 'src/components/Card/BookCard';

const Home = ({ searchResults = [] }) => {
   return (
      <div>
         <div className="flex flex-col justify-center items-center ">
            <h1 className="text-4xl p-2">GAME OF THRONE</h1>
            <h5 className="p-1">A Song of Ice and Fire</h5>
            <h3 className="text-xl p-1">Books by George R.R. Martin</h3>
            <div className="px-0 py-8 sm:px-4 lg:px-8">
               <h5 className="p-2 border bg-bg">
                  New Jersey native George R.R. (Richard Raymond) Martin—or GRRM-- is best known for
                  A Song of Ice and Fire adapted to become the television series Game of Thrones.
                  Martin has written one of each season's episodes and also serves as the series'
                  co-executive producer. Born George Raymond Martin in New Jersey in 1948, Martin
                  received a B.S. and an M.S. in Journalism from Northwestern University. He began
                  writing science fiction, fantasy, and horror part-time during the 1970s while
                  working as a VISTA volunteer, chess director, and journalism instructor. Moving to
                  Hollywood, Martin worked in the television industry in roles such as a story
                  editor for The Twilight Zone and producer for Beauty and the Beast. Among the many
                  awards Martin has garnered are Hugo Awards for Best Novella, Best Novelette, Best
                  Short Story, and Best Dramatic Presentation as well as the World Fantasy Award for
                  Lifetime Achievement. Martin was selected by Time magazine as one of the "Most
                  Influential People of 2011." He lives in Santa Fe, New Mexico.
               </h5>
            </div>
         </div>
         <div className=" ">
            <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
               {searchResults
                  ? searchResults.map((x: CardProps) => <BookCard key={x.name} cardData={x} />)
                  : 'No Data'}
            </div>
         </div>
      </div>
   );
};

export default Home;
