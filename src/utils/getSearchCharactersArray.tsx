import _ from 'lodash';
import { characterProps } from '../view/characters/charactersCard';

type TsearchInput = string;

export interface Icharacters {
   characters: characterProps[];
   searchInput: TsearchInput;
}

function getSearchCharactersArray({ characters, searchInput }: Icharacters) {
   const resultsArray = characters.filter(
      (character) =>
         _.lowerCase(character.name).includes(searchInput) ||
         _.lowerCase(character.culture).includes(searchInput)
   );

   return resultsArray;
}

export default getSearchCharactersArray;
