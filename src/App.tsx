import Providers from "./contexts";
import { Routes } from "types/routes";
import "./App.css";


function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}

export default App;
