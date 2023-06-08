import { data } from "./data";
import Photo from "./components/photo";
import Title from "./components/title";
import Author from "./components/author";
import Price from "./components/price";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counter";

function BookList() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <section className="booklist">
      {data.map((book, index) => {
        return <Book key={index} book={book} />;
      })}

      <div>
        Count: {count}
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
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
