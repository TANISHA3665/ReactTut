import React from 'react'
import Book from './Books'

const firstBook = {
    author : 'James Clear',
    title : 'Atomic Habits',
    image :
        'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY327_FMwebp_QL65_.jpg'
};

const secondBook = {
  author: ' Héctor García',
  title: 'Ikigai: The Japanese secret ',
  image:
    'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
}

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        image={firstBook.image}
      >
        {/* Children prop ---everything we render between component tags */} 
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga iusto, laudantium animi officia ab maiores culpa
        </p>
        <button>Click me</button>
      </Book>

      <Book
        author={secondBook.author}
        title={secondBook.title}
        image={secondBook.image}
      />
    </section>
  )
}

export default BookList
