// import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import ProductList from "./components/product-list/ProductList";
import Contact from "./components/Contact";
import About from "./components/About";
import Shop from "./components/Shop";
import SingleItem from "../src/components/Single/SingleItem"
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <  Router>
   
      {/* <Header /> */}
      {/* <Banner /> */}
      {/* <ProductList /> */}

      <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/about" element={<About />} />


      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Shop />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/shop/:id" element={<SingleItem />} />
     
     </Routes>

      </Router>
    </div>
  );
}

export default App;
