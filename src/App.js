import { Container } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import About from "./Pages/About us/About";
import { Switch } from "@mui/material";
import "./components/Header/Header.css"
import { createContext, useState } from "react";


export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState("dark")

  const toogleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme }}>
      <BrowserRouter>
        <Header />
        <div className="app" id={theme} >
          <Container>
            <Switch onClick={toogleTheme} />
            <Routes>
              <Route path="/" element={<Trending />} exact />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/search" element={<Search />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Container>
        </div>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
