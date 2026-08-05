import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Transport } from "./pages/Transport";
import { Diesel } from "./pages/Diesel";
import { MissingPersons } from "./pages/MissingPersons";
import { FleetMonitoring } from "./pages/FleetMonitoring";
import { TotalMineVisibility } from "./pages/TotalMineVisibility";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="transport" element={<Transport />} />
          <Route path="diesel" element={<Diesel />} />
          <Route path="missing-persons" element={<MissingPersons />} />
          <Route path="fleet-monitoring" element={<FleetMonitoring />} />
          <Route path="tihlo" element={<Navigate to="/fleet-monitoring" replace />} />
          <Route path="total-mine-visibility" element={<TotalMineVisibility />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
