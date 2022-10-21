const fetchBookImage = (bookName: string |undefined) => {

   let imageURL;

   switch (bookName) {
      case 'A Game of Thrones':
         imageURL = 1;
         break;
      case 'A Clash of Kings':
         imageURL = 2;
         break;
      case 'A Storm of Swords':
         imageURL = 3;
         break;
      case 'The Hedge Knight':
         imageURL = 4;
         break;
      case 'A Feast for Crows':
         imageURL = 5;
         break;
      case 'The Sworn Sword':
         imageURL = 6;
         break;
      case 'The Mystery Knight':
         imageURL = 7;
         break;
      case 'A Dance with Dragons':
         imageURL = 8;
         break;
      case 'The Princess and the Queen':
         imageURL = 9;
         break;
      case 'The Rogue Prince':
         imageURL = 10;
         break;
      case 'The World of Ice and Fire':
         imageURL = 11;
         break;
      case 'A Knight of the Seven Kingdoms':
         imageURL = 12;
         break;
      default:
         imageURL = 1;
   }

   return (
      <div className="flex justify-center">
         <img
            className="h-96 w-auto "
            src={require(`src/img/books/${imageURL}.png`)}
            alt={bookName}
         />
      </div>
   );
};

export default fetchBookImage;
