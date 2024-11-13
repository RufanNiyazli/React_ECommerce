import { useState } from "react";
import Container from "@mui/material/Container";
import Router from "./Config/Router";
import "./App.css";
import Header from "./Components/Header";
function App() {
  const root = document.getElementById("root");
  root.style.color = "#2e2e2e";
  root.style.backgroundColor = "#fff3e0";
  root.style.height = "100vh";
  return (
    <>
      <Container>
        <Header />
        <Router />
      </Container>
    </>
  );
}

export default App;
