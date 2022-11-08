import "./App.css";
import Layout from "./views/Layout";
import Landing from "./views/Landing";
import Review from "./views/Review";
import Author from "./views/Author";
import Book from "./views/Book";

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <HashRouter basename="/richard_ruhling">
        {/* basename="/author_book_website" */}
        <Layout>
          <Routes>
            {/* <Route path="/" element={<Layout />}> */}
            <Route index element={<Landing />} />
            <Route path="reviews" element={<Review />} />
            <Route path="author" element={<Author />} />
            <Route path="book" element={<Book />} />

            {/* <Route path="author" element={<Author />} />
           
            
            <Route path="order" element={<Order />} />
            <Route path="contact" element={<ContactUs />} /> */}
            {/* </Route> */}
          </Routes>
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
