import "./App.css";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Header />
      <div id="container">
        <Nav />
        <div id="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
