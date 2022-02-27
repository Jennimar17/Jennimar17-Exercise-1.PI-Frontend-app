import Home from "./components/Home/Home";
import PhoneListing from "./components/Phones/PhoneListing.jsx";
import PhoneDetails from "./components/PhoneDetails.jsx/PhoneDetails.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<PhoneListing />} />
        <Route
          path="/phone-detail/:productId"
          exact
          component={<PhoneDetails />}
        />
      </Routes>
    </Router>
  );
}

export default App;
