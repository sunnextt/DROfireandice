import  { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';


import { useAppDispatch } from 'src/store/hooks';
import { addCharacters } from 'src/store/slice/bookSlice';
import { getCharacter } from 'src/services/api';

// import card component and characterProps interface
import CharactersCard, { characterProps } from './charactersCard';

const Characters = () => {
   const dispatch = useAppDispatch();
   const { ref, inView } = useInView();

   const {
      data: characters,
      error,
      isFetching,
      fetchNextPage,
      hasNextPage
   } = useInfiniteQuery(
      ['books'],
      async ({ pageParam = 1 }) => {
         const res = await getCharacter(pageParam);
         return res.data;
      },
      {
         getNextPageParam: (lastPage, allPages) => {
            return lastPage.length ? allPages.length + 1 : undefined;
         }
      }
   );

   useEffect(() => {
      if (inView && hasNextPage) {
         fetchNextPage();
      }
   }, [fetchNextPage, hasNextPage, inView]);


   // use dispatch to save data to store
   useEffect(() => {
      dispatch(addCharacters(characters));
   }, [characters, dispatch]);


   // character card contents to render
   const content = characters?.pages.map((pg, i) => {
      // eslint-disable-next-line array-callback-return
      return pg.map((character: characterProps, i: number) => {
         return <CharactersCard ref={ref} key={character.aliases + i} character={character} />;
      });
   });

   return (
      <>
         <h3 className="text-3xl font-semibold text-center my-8">
            List of Characters Books by George R.R. Martin
         </h3>
         <div>
            <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
               {content}
            </div>
            {error ? (
               <>
                  <div>
                     <h4>Oh no, there was an error</h4>
                     <button onClick={() => fetchNextPage()} disabled={isFetching}>
                        {isFetching ? 'Fetching...' : 'Refetch'}
                     </button>
                  </div>
               </>
            ) : (
               <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {content}
               </div>
            )}
         </div>
      </>
   );
};

export default Characters;
