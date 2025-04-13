import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LostAndFound from "./pages/lostfound";
import AuthPage from "./pages/signup";
import ReportLost from "./pages/reportlost";
import ReportFound from "./pages/reportfound";
import LostItem from "./pages/LostItems";
import Faqs from "./pages/faqs";
import Terms from "./pages/terms";
import LostAndFoundUI from "./pages/LostAndFoundUI";
import ReportIssue from "./pages/reportissue"; // ✅ Import added

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LostAndFound />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reportlost" element={<ReportLost />} />
        <Route path="/reportfound" element={<ReportFound />} />
        <Route path="/lostitem" element={<LostItem />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/lostfoundui" element={<LostAndFoundUI />} />
        <Route path="/report" element={<ReportIssue />} /> {/* ✅ New route */}
      </Routes>
    </Router>
  );
}

export default App;








