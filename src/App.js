import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home"
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <main className="AppBody">
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/login/*" element={<Login />} />
      </Routes>
      </main>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
