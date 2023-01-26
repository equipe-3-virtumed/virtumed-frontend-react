import Providers from "./contexts";
import { Routes } from "types/routes";

function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}

export default App;
