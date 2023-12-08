import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteBook, getAllBooks } from "./BookService";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllBooks();
      if (result) {
        setBooks(result.data);
      }
    };
    fetchData();
  }, []);

  const onDelete = async (id) => {
    const result = await deleteBook(id);
    if (result.status === 200) {
      const newBooks = books.filter((item) => item._id !== id);
      setBooks(newBooks);
    }
  };

  const bookList =
    books.length === 0
      ? "there is no book record!"
      : books.map((book, k) => (
          <BookCard book={book} key={k} onDelete={onDelete} />
        ));

  return (
    <div className='BookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-book'
              className='btn btn-outline-warning float-right'
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{bookList}</div>
      </div>
    </div>
  );
}

function BookCard({ book, onDelete }) {
  const handleDelete = () => {
    onDelete(book._id);
  };

  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Books'
        height='200'
      />
      <div className='desc'>
        <h2>
          <a href='/show-book/123id'>{book.title}</a>
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
        <p>Pages: {book.pages}</p> {/* Display the 'pages' field */}
      </div>
      <button className='delete-btn' onClick={handleDelete}>
        x
      </button>
    </div>
  );
}

export default BookList;
