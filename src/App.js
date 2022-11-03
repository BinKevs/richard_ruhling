import "./App.css";
import Layout from "./views/Layout";
import Landing from "./views/Landing";

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
            {/* <Route path="author" element={<Author />} />
            <Route path="book" element={<Book />} />
            <Route path="reviews" element={<Reviews />} />
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
