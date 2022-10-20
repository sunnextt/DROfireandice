import { forwardRef, Ref } from 'react';
import { Ibooks } from 'src/context/context';
import fetchBookImage from 'src/utils/fetchBookImage';

export interface CardProps {
   // map(arg0: (x: CardProps) => JSX.Element): import('react').ReactNode;
   released: string;
   name: string;
   publisher: string;
   isbn: string;
   authors: string;
   characters: string[];
   povCharacters: string[];
   numberOfPages: Number;
   url: string;
   country: string;
   mediaType: string;
}
// export interface iCardProps {
//    cardData: Ibooks;
// }

export type refType = HTMLDivElement;

const BookCard = forwardRef(
   ({ cardData, i }: { cardData: Ibooks; i: number }, ref: Ref<refType>) => {
      return (
         <div className="border rounded p-4 bg-bg" ref={ref}>
            {fetchBookImage(cardData.name)}
            <div className=" py-2 ">
               <h3 className="font-bold py-1 text-2xl text-center">{cardData.name}</h3>
               <p className="text-center">Book #{i + 1}in the A Song of Ice and Fire Series</p>
               <h4 className="font-normal py-1">
                  name: <span className="text-secondary font-medium  ">{cardData.name}</span>
               </h4>
               <h4 className="font-normal py-1">
                  Publisher:{' '}
                  <span className="text-secondary font-medium ">{cardData.publisher}</span>
               </h4>
               <h4 className="font-normal py-1">
                  ISBN: <span className="text-secondary font-medium ">{cardData.isbn}</span>
               </h4>
               <h4 className="font-normal py-1">
                  Author: <span className="text-secondary font-medium ">{cardData.authors}</span>
               </h4>
               <h4 className="font-normal py-1">
                  Released Date:{' '}
                  <span className="text-secondary font-medium ">{cardData.released}</span>
               </h4>
            </div>
         </div>
      );
   }
);

export default BookCard;
