import React from "react";
import NavBar from "./components/layouts/NavBar";
import Container from "./components/layouts/Container";
import Home from "./components/pages/home";
import Createbooks from "./components/pages/CreateBook";
import ListBooks from "./components/pages/ListBooks";

function App() {
  return (
    <>
      <Container>
        <NavBar />
        <Home />
        <Createbooks />
        <ListBooks />
      </Container>
    </>
  );
}
export default App;
