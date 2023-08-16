import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileMain from "./Components/Mobile/MobileMain";
import MobileOrder from "./Components/Mobile/MobileOrder";
import MobileLogin from "./Components/Mobile/Auth/MobileLogin";
import MobileRegister from "./Components/Mobile/Auth/MobileLogin";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MobileMain />}></Route>
          <Route path="/order" element={<MobileOrder />}></Route>
          <Route path="/login" element={<MobileLogin />}></Route>
          <Route path="/register" element={<MobileRegister />}></Route>
          <Route path="/"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
