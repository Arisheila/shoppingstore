import ProductList from "./components/product-list/ProductList";
import Contact from "./components/Contact";
import About from "./components/About";
import Shop from "./components/Shop";
import SingleItem from "../src/components/Single/SingleItem"
import NotFound from "./components/NotFound";
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <  Router>
   
   <Header />
      <Routes>
      <Route path="/" element={<ProductList />} exact />
      <Route path="/about" element={<About />}  exact/>
      <Route path="*" element={<NotFound />}  />

      <Route path="/contact" element={<Contact />}  exact/>
      <Route path="/shop" element={<Shop />}  exact/>
      <Route path="/shop/:id" element={<SingleItem />} exact />
      {/* <Redirect to="*" /> */}
     
     </Routes>



      </Router>
    </div>
  );
}

export default App;
