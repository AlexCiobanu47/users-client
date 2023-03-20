import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
