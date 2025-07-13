import { Route, Routes } from "react-router";
import Home from "./page/Home";
import Products from "./page/Products";
import ProjectLayout from "./components/layout/ProjectLayout";

function App() {
  return (
    <Routes>
      <Route element={<ProjectLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
