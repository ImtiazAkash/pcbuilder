import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AutoBuild from "./pages/AutoBuild";
import ManualBuild from "./pages/ManualBuild";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";
import AdminLandingPage from "./pages/AdminLandingPage";




function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/autobuild" element={<AutoBuild />} />
        <Route exact path="/manualbuild" element={<ManualBuild />} />
        <Route exact path="/admin" element={<AdminLogin />} />
        <Route exact path="/admin-signup" element={<AdminSignup />} />
        <Route exact path="/admin-home" element={<AdminLandingPage />} />
        {/* <Route exact path="/chooseComponent" element={<ChooseComponent />} /> */}
        
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
