// const Book = (props) => {
//   console.log(props)
//   return (
//     <article className="book">
//       <img src={props.image} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h4>{props.author}</h4>
//     </article>
//   )
// }

// const Book = (props) => {
//   const { image, title, author,children } = props
//   console.log(props);
//   return (
//     <article className="book">
//       <img src={image} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   )
// }

// const Book = ({ image, title, author,children }) => {
// //   console.log(props); //this wont work here
//   return (
//     <article className="book">
//       <img src={image} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//       {children}
//     </article>
//   )
// }

// Pass The Entire Object
// Destructuring (object)

// const Book = (props) => {
//   const { key, image, title, author } = props.book
//   return (
//     <article className="book">
//       <img src={image} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   )
// }


const Book = ({book: { image, title, author }}) => {
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

export default Book
