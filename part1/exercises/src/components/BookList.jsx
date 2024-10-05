export default function BookList() {
   let pageTitle = "BookList";
   let book1 = "https://m.media-amazon.com/images/I/81HuYGapupL._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1704917687i/186074.jpg";
   let book3 = "https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_kaisen.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Image for unfuck yourself" />
         <img src={book2} alt="Image for the name of the wind" />
         <img src={book3} alt="Image for jiu jitsu kaisen" />
      </div>      
   );
}