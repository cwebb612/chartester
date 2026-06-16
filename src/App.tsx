import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Dev from "./pages/Dev";
import Home from "./pages/Home";
import Photos from "./pages/Photos";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </BrowserRouter>
  );
}
