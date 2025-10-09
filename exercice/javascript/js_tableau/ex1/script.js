const books = [
  {
    id: 1,
    title: "JavaScript for Beginners",
    author: "Alice Martin",
    year: 2020,
    pages: 300,
    genre: "programming",
    rating: 4.2,
  },
  {
    id: 2,
    title: "Advanced React",
    author: "Bob Dupont",
    year: 2021,
    pages: 450,
    genre: "programming",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Art History",
    author: "Claire Leroy",
    year: 2019,
    pages: 280,
    genre: "art",
    rating: 3.8,
  },
  {
    id: 4,
    title: "Python Data Science",
    author: "David Moreau",
    year: 2022,
    pages: 520,
    genre: "programming",
    rating: 4.7,
  },
  {
    id: 5,
    title: "Design Patterns",
    author: "Alice Martin",
    year: 2018,
    pages: 320,
    genre: "programming",
    rating: 4.1,
  },
  {
    id: 6,
    title: "Modern Painting",
    author: "Emma Laurent",
    year: 2020,
    pages: 190,
    genre: "art",
    rating: 3.9,
  },
];

// recuperer tout les livres d'un auteur
function searchBooksByAuthor(author) {
  for (i = 0; i < books.length; i++) {
    if (books[i].author == author) {
      console.log(books[i].title);
    }
  }
}

searchBooksByAuthor("Alice Martin");

// moyenne des pages de livres par genre
function moyennePageGenre(genre) {
  let moyenne = 0;
  let nb = 0;
  for (i = 0; i < books.length; i++) {
    if (books[i].genre == genre) {
      moyenne += books[i].pages;
      nb++;
    }
  }
  console.log(moyenne / nb);
}

moyennePageGenre("programming");
moyennePageGenre("art");

// Trouver le livre le plus recent

function moreRecentBooks() {
  let temp = 0;
  let result;

  for (i = 0; i < books.length; i++) {
    if (books[i].year > temp) {
      temp = books[i].year;
      result = books[i].title;
    }
  }
  console.log(result, temp);
}

moreRecentBooks();

// Créer une liste unique de tous les auteurices

function authorList() {
  let list = [];
  for (i = 0; i < books.length; i++) {
    list.push(books[i].author);
  }
  console.log(list);
}

authorList()

// Grouper les livres par genre

function booksByGenre(genre){
  for(i = 0; i < books.length; i++){
    if(books[i].genre == (genre)){
      console.log(books[i].title)
    }
  }
}

// booksByGenre("programming")
booksByGenre("art")