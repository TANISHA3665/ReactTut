import React from 'react'
import Book from './Books'

const firstBook = {
  id: 1,
  author: 'James Clear',
  title: 'Atomic Habits',
  image:
    'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY327_FMwebp_QL65_.jpg',
}

const secondBook = {
  id: 2,
  author: ' Héctor García',
  title: 'Ikigai: The Japanese secret ',
  image:
    'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
}
const books = [firstBook, secondBook]

// const BookList = () => {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         console.log(book)

//         return (
//           <Book title={book.title} image={book.image} author={book.author} />
//         )
//       })}
//     </section>
//   )
// }

// const BookList = () => {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         console.log(book)
//         const { id, author, title, image } = book
//         return (
//           <Book key={id} title={title} image={image} author={author} />
//         )
//       })}
//     </section>
//   )
// }


// pass entire object as props to BookList

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        {/* console.log(book) */}
        const {author, title, image } = book 
        return (
          <Book book = {book} key = {book.id}/>
        )
      })}
    </section>
  )
}

// using spread operator


// const BookList = () => {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return <Book {...book} key={book.id} />
//       })}
//     </section>
//   )
// }

export default BookList
