import { useState } from "react";
import Container from "@mui/material/Container";
import Router from "./Config/Router";
import "./App.css";
import Drawer from "./Components/DrawerComponent";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Router />
        <Drawer />
      </Container>
    </>
  );
}

export default App;
