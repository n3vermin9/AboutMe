import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Desktop from "./Desktop";

function App() {
  return (
    <BrowserRouter basename="/AboutMe">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/desktop" element={<Desktop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;