import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Home/Index";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
