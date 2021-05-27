import logo from "./logo.svg";
import "./App.css";
import SummaryForm from "./pages/SummaryForm";
import Options from "./pages/entry/Options";
import { Container } from "@material-ui/core";
import OrderEntry from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OrderDetails";

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
