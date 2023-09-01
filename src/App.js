import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./containers/LandingPage";
import PropertyDetail from "./containers/PropertyDetail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
