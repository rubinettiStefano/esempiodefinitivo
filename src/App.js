import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import Homepage from "./components/homepage/Homepage";
import AllPeople from "./components/people/AllPeople";

function App() {
  return (
    <BrowserRouter>

      <Navbar />    
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="allpeople" element={<AllPeople />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
