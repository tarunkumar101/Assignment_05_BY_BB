import "./App.css";
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import ProductList from "./components/homeproductlist/ProductList";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/products" element={<h2>Product Component</h2>}/>
      <Route path="/help" element={<h2>Help Component</h2>}/>
      <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;