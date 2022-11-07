import "./App.css";
import Layout from "./views/Layout";
import Landing from "./views/Landing";
import Review from "./views/Review";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* basename="/author_book_website" */}
        <Layout>
          <Routes>
            {/* <Route path="/" element={<Layout />}> */}
            <Route index element={<Landing />} />
            <Route path="reviews" element={<Review />} />
            {/* <Route path="author" element={<Author />} />
            <Route path="book" element={<Book />} />
            
            <Route path="order" element={<Order />} />
            <Route path="contact" element={<ContactUs />} /> */}
            {/* </Route> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
