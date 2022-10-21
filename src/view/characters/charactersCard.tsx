import React, { forwardRef, memo, Ref } from 'react';

export interface characterProps {
   map(arg0: (x: characterProps) => JSX.Element): import('react').ReactNode;
   aliases: string;
   culture: string;
   died: string;
   father: string;
   gender: string;
   mother: string;
   name: string;
   spouse: string;
   id: string | number;
}

const length = 33;

const CharactersCard = forwardRef(
   ({ character }: { character: characterProps }, ref: Ref<HTMLDivElement>) => {
      return (
         <div ref={ref}>
            <div className="border rounded p-4 bg-bg">
               <ul>
                  <li className="font-normal py-1">
                     Aliases:{' '}
                     <span className="text-secondary font-medium  ">{character.aliases}</span>
                  </li>
                  <li className="font-normal py-1">
                     culture:{' '}
                     <span className="text-secondary font-medium  ">{character.culture}</span>
                  </li>
                  <li className="font-normal py-1">
                     died: <span className="text-secondary font-medium  ">{character.died}</span>
                  </li>
                  <li className="font-normal py-1">
                     father:{' '}
                     <span className="text-secondary font-medium  ">
                        {character.father.substring(0, length)}
                     </span>
                  </li>
                  <li className="font-normal py-1">
                     mother:{' '}
                     <span className="text-secondary font-medium  ">
                        {character.mother.substring(0, length)}
                     </span>
                  </li>
                  <li className="font-normal py-1">
                     gender:{' '}
                     <span className="text-secondary font-medium  ">{character.gender}</span>
                  </li>
                  <li className="font-normal py-1">
                     name: <span className="text-secondary font-medium  ">{character.name}</span>
                  </li>
                  <li className="font-normal py-1">
                     spouse:{' '}
                     <span className="text-secondary font-medium  ">
                        {character.spouse.substring(0, length)}
                     </span>
                  </li>
               </ul>
            </div>
         </div>
      );
   }
);

export default memo(CharactersCard);
