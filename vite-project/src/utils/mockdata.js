const Books = [
  // Science Books
  {
    id: 1,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "Science",
    publishedYear: 1988,
    price: 450,
    rating: 4.8,
    available: true,
    image: "https://covers.openlibrary.org/b/id/7888152-L.jpg",
    description: "Explores the nature of time, black holes, and the universe in simple terms."
  },
  {
    id: 2,
    title: "Cosmos",
    author: "Carl Sagan",
    genre: "Science",
    publishedYear: 1980,
    price: 400,
    rating: 4.7,
    available: true,
    image: "https://pictures.abebooks.com/isbn/9780345331359-us.jpg",
    description: "A journey through space, time, and the story of human discovery."
  },
  {
    id: 3,
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    genre: "Science",
    publishedYear: 1976,
    price: 370,
    rating: 4.6,
    available: false,
    image: "https://m.media-amazon.com/images/I/61CXvkfdXlL._UF1000%2C1000_QL80_.jpg",
    description: "Introduces the revolutionary concept of genes as the drivers of evolution."
  },
  {
    id: 4,
    title: "The Gene: An Intimate History",
    author: "Siddhartha Mukherjee",
    genre: "Science",
    publishedYear: 2016,
    price: 480,
    rating: 4.7,
    available: true,
    image: "https://m.media-amazon.com/images/I/71knXNNQMwL._UF1000%2C1000_QL80_.jpg",
    description: "Traces the history and impact of genetics on humanity."
  },
  {
    id: 5,
    title: "Astrophysics for People in a Hurry",
    author: "Neil deGrasse Tyson",
    genre: "Science",
    publishedYear: 2017,
    price: 350,
    rating: 4.5,
    available: true,
    image: "https://m.media-amazon.com/images/I/71cNXlbgtdL._UF1000%2C1000_QL80_.jpg",
    description: "A quick and engaging guide to the cosmos for curious minds."
  },

  // Fiction Books
  {
    id: 6,
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    publishedYear: 1949,
    price: 300,
    rating: 4.9,
    available: true,
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    description: "A dystopian tale of surveillance, control, and the fight for freedom."
  },
  {
    id: 7,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    publishedYear: 1925,
    price: 280,
    rating: 4.4,
    available: true,
    image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524879761/the-great-gatsby-9781524879761_hr.jpg",
    description: "A tragic story of wealth, love, and the American dream in the Jazz Age."
  },
  {
    id: 8,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publishedYear: 1960,
    price: 320,
    rating: 4.8,
    available: false,
    image: "https://i.ebayimg.com/images/g/GRkAAOSwAVZl-l2G/s-l1200.png",
    description: "A moving story about racial injustice and moral courage in the Deep South."
  },
  {
    id: 9,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    publishedYear: 1951,
    price: 290,
    rating: 4.2,
    available: true,
    image: "https://pictures.abebooks.com/inventory/2021074213.jpg",
    description: "A rebellious teens search for meaning and identity in New York City."
  },
  {
    id: 10,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Fiction",
    publishedYear: 1932,
    price: 310,
    rating: 4.6,
    available: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqXDVpKOoXJ2T9h9MYwO2Pd_oIqm7heiu1w&s",
    description: "A futuristic society shaped by technology, conformity, and control."
  },

  // Non-Fiction Books
  {
    id: 11,
    title: " A Brief History Of a Mankind",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    publishedYear: 2011,
    price: 500,
    rating: 4.9,
    available: true,
    image: "https://miro.medium.com/v2/resize:fit:592/format:webp/0*RArKNBFL91CwGeWU",
    description: "Explores how humans evolved and shaped civilizations across millennia."
  },
  {
    id: 12,
    title: "Educated",
    author: "Tara Westover",
    genre: "Non-Fiction",
    publishedYear: 2018,
    price: 450,
    rating: 4.7,
    available: true,
    image: "https://images2.penguinrandomhouse.com/cover/9781949061499",
    description: "A memoir of resilience, self-discovery, and breaking free through education."
  },
  {
    id: 13,
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Non-Fiction",
    publishedYear: 2018,
    price: 520,
    rating: 4.8,
    available: true,
    image: "https://m.media-amazon.com/images/I/81cJTmFpG-L._UF894%2C1000_QL80_.jpg",
    description: "The inspiring life story of the former First Lady of the United States."
  },
  {
    id: 14,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Non-Fiction",
    publishedYear: 2011,
    price: 430,
    rating: 4.6,
    available: false,
    image: "https://bookstohomeindia.b-cdn.net/wp-content/uploads/2023/04/Thinking-Fast-and-Slow-min-1.webp",
    description: "Reveals the two systems that drive human thought and decision-making."
  },
  {
    id: 15,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    genre: "Non-Fiction",
    publishedYear: 2012,
    price: 390,
    rating: 4.5,
    available: true,
    image: "https://m.media-amazon.com/images/I/71eoUH2EngL.jpg",
    description: "Explains how habits work and how they can be transformed for success."
  },
  {
    id: 16,
    title: "Outliers: The Story of Success",
    author: "Malcolm Gladwell",
    genre: "Non-Fiction",
    publishedYear: 2008,
    price: 410,
    rating: 4.6,
    available: true,
    image: "https://m.media-amazon.com/images/I/61ozF-y47lL._UF1000,1000_QL80_.jpg",
    description: "Examines the hidden factors that contribute to extraordinary success."
  }
];

export default Books;

