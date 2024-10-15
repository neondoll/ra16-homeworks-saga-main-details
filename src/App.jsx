import Details from "./routes/Details";
import Paths from "./paths";
import Root from "./routes/Root";
import { Route, Routes } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path={Paths.ROOT} element={<Root />}>
        <Route path={Paths.DETAILS(":id")} element={<Details />} />
      </Route>
    </Routes>
  );
}
