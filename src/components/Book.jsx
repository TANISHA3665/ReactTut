import React from 'react'

const Book = () => {
  return (
    <article className='book'>
    <Image />
    <Title/>
    <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY327_FMwebp_QL65_.jpg"
    alt="Atomic Habits"
  />
)
const Title = () => <h2>Atomic Habits</h2>
const Author = () => <h4>James Clear</h4> 
export default Book
