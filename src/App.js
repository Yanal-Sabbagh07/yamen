import "./App.css";
import Navbar from "./components/Navbar";
import { routes } from "./routes";
import { RoutesRenderer } from "./routing/RoutesRenderer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <RoutesRenderer routes={routes} />
    </div>
  );
}

export default App;
