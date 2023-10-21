import "./App.css";
import Button from "./components/Button/Button";
import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Logo />
      <Navigation />
      <Button>Contact Now</Button>
    </div>
  );
}

export default App;
