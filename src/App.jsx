import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileMain from "./Components/Mobile/MobileMain";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MobileMain />}></Route>
          {/* <Route path="/1" element={<M_Page1 />}></Route>
          <Route path="/2" element={<M_Page2 />}></Route>
          <Route path="/3" element={<M_Page3 />}></Route>
          <Route path="/pc" element={<Page1 />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
