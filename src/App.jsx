import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Home from "./pages/home/Home";
import Ticket from "./pages/ticket/Ticket";
import { FormProvider } from "./context/FormContext";

function App() {
  const location = useLocation();

  return (
    <>
      <Menu />
      <FormProvider>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      </FormProvider>
    </>
  );
}

export default App;
