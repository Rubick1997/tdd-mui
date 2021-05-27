import logo from "./logo.svg";
import "./App.css";
import SummaryForm from "./pages/SummaryForm";
import Options from "./pages/entry/Options";
function App() {
  return (
    <div className="App">
      <Options optionType="toppings" />
      <SummaryForm />
    </div>
  );
}

export default App;
