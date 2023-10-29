// import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import ProductList from "./components/product-list/ProductList";
import Contact from "./components/Contact";
import About from "./components/About";
import Shop from "./components/Shop";
import SingleItem from "../src/components/Single/SingleItem"
// import FooterMain from "./components/Footer/Footer"
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <  Router>
   
     
   

      <Routes>
      <Route path="/" element={<ProductList />} exact />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<SingleItem />} />
      {/* <Redirect to="*" /> */}
     
     </Routes>

  {/* <FooterMain /> */}

      </Router>
    </div>
  );
}

export default App;
