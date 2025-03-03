import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Products/>} path="/products"></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
