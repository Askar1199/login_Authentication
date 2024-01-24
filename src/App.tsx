// import { useState } from "react";
import "./App.css";
// import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Signupscreen from "./screens/Signupscreen";
import loginscreen from "./screens/loginscreen";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Container className="mainContainer" >
          <Routes>
            <Route path="/" Component={Homescreen}></Route>
          </Routes>
          <Routes>
            <Route path="/signup" Component={Signupscreen}></Route>
          </Routes>
          <Routes>
            <Route path="/login" Component={loginscreen}></Route>
          </Routes>
        </Container>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
