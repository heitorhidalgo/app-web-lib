import React from "react";
import NavBar from "./components/layouts/NavBar";
import Container from "./components/layouts/Container";
import Home from "./components/pages/home";
import Createbooks from "./components/pages/CreateBook";
import ListBooks from "./components/pages/ListBooks";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Container>
        <NavBar />
        <Home />
        <Createbooks />
        <ListBooks />
      </Container> */}

      <BrowserRouter>
        <Container>
            <Routes>
              <Route path='/' element={<NavBar />}>
                  <Route path='/' element={<Home />} />
                  <Route path='/listBook' element={<ListBooks />} />
                  <Route path='/newBook' element={<Createbooks />} />
              </Route>
            </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}
export default App;
