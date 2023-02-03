import Providers from "./contexts";
import { Routes } from "router/routes";

function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}

export default App;
