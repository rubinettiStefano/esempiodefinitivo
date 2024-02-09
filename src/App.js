import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import Homepage from "./components/homepage/Homepage";
import AllPeople from "./components/people/AllPeople";
import PersonDetail from "./components/people/PersonDetail";
import { atom } from "jotai";
import PersonDetailPrenotations from "./components/people/PersonDetailPrenotations";
import PrenotationForm from "./components/people/prenotations/PrenotationForm";
import ChooseHouse from "./components/houses/ChooseHouse";


//Variabile di contesto globale
//è STATE dell'intera applicazione
export const valoreGlobale = atom("ciao sono il valore globale");

function App() {
  return (
    <BrowserRouter>

      <Navbar />    
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="allpeople" element={<AllPeople />} />
        <Route path="persondetail/:id" element={<PersonDetail />}/>
        <Route path="persondetailpren/:id" element={<PersonDetailPrenotations />}/>
        <Route path="choosehouse/:id" element={<ChooseHouse />}/>
        <Route path="prenotationform/:p_id/:h_id" element={<PrenotationForm />}/>
        {/* in spring facciamo con url/{id} */}
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
