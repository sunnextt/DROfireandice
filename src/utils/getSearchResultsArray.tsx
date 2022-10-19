import _ from 'lodash';
import { CardProps } from '../components/Card/BookCard';

interface Ibooks {
   books: CardProps[];
   searchInput: string;
}

function getSearchResultsArray({ books, searchInput }: Ibooks) {
      console.log(searchInput);

   const resultsArray = books.filter(
      (book) =>
         _.lowerCase(book.name).includes(searchInput) ||
         _.lowerCase(book.isbn).includes(searchInput) ||
         _.lowerCase(book.authors).includes(searchInput) ||
         _.lowerCase(book.publisher).includes(searchInput)
   );

   return resultsArray;
}

export default getSearchResultsArray;
