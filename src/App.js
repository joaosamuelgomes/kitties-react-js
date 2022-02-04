import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home"
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound";
import { UserStorage } from "./UserContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
            <main className="AppBody">
              <Routes>
                <Route path="/" element={<Home/>} /> 
                <Route path="/login/*" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
