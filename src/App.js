import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "./components/BookList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "./components/AddBook";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<BookList />} />
          <Route path='/create-book' element={<AddBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
