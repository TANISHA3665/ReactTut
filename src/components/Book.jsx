import React from 'react'

const author = 'James Clear'

const Book = () => {
    const title = 'Atomic Habits'

  return (

    <article className='book'>
        <img
            src="https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY327_FMwebp_QL65_.jpg"
            alt="Atomic Habits"
        />
        <h2>{title}</h2>
        <h4>{author.toUpperCase()}</h4> 
    </article>
  );
};

export default Book

