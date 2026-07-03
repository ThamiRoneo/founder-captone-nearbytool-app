import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage.tsx";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Item detail, booking flow, and auth routes are added as they're built. */}
    </Routes>
  );
}
