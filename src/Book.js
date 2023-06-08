import { data } from "./data";
import Photo from "./components/photo"
import Title from "./components/title"
import Author from "./components/author"
import Price from "./components/price"

function BookList() {
  return (
    <section className="booklist">
      {data.map((book, index) => {
        return <Book key={index} book={book} />;
      })}
    </section>
  );
}

function Book(props) {
  const { img, title, author, price } = props.book;

  function handleClick() {
    console.log(title);
  }

  return (
    <div className="book">
      <Photo img={img} />
      <Title title={title} />
      <Author author={author} />
      <Price price={price} />
      <button type="button" onClick={handleClick}>
        Reference
      </button>
    </div>
  );
}

export default BookList;
