import { BrowserRouter, Routes, Route } from "react-router-dom";

import Portfolio from "./Portfolio";
import GymSystemAnalysis from "./pages/GymSystemAnalysis";
import JavaCertification from "./pages/JavaCertification";
import FrontendCertification from "./pages/FrontendCertification";
import SalacyberCertification from "./pages/SalacyberCertification";
import KhmerRice from "./pages/KhmerRice";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Portfolio />} />

        <Route
          path="/projects/gym-system-analysis"
          element={<GymSystemAnalysis />}
        />

        <Route
          path="/certificates/java"
          element={<JavaCertification />}
        />

        <Route
          path="/certificates/frontend"
          element={<FrontendCertification />}
        />

        <Route
          path="/certificates/salacyber"
          element={<SalacyberCertification />}
/>

      
      <Route
  path="/projects/khmerrice"
  element={<KhmerRice />}
/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;