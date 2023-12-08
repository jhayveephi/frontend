import { useState } from "react";
import { addBook } from "./BookService";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [data, setData] = useState({
    title: "",
    author: "",
    description: "",
    pages: "", // Add the 'pages' field to the state
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await addBook(data);
      if (result.status === 201) {
        // Assuming you return 201 for successful creation
        setData({
          title: "",
          author: "",
          description: "",
          pages: "", // Clear 'pages' as well
        });
        navigate("/");
      } else {
        console.error("Failed to add book:", result.data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <div className='CreateBook'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <a className='btn btn-info float-left' href='/'>
              Show BooK List
            </a>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Book</h1>
            <p className='lead text-center'>Create new book</p>
            <form noValidate onSubmit={handleSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Title of the Book'
                  name='title'
                  className='form-control'
                  value={data.title}
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Author'
                  name='author'
                  className='form-control'
                  value={data.author}
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Describe this book'
                  name='description'
                  className='form-control'
                  value={data.description}
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Book Pages'
                  name='pages'
                  className='form-control'
                  value={data.pages}
                  onChange={handleChange}
                />
              </div>
              <input type='submit' className='btn btn-info btn-block mt-4' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
