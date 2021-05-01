import SecondsCounter from "./component/secondsCounter";
import "./App.css";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className= "container">
      <Container>
        <SecondsCounter />
      </Container>
    </div>
  );
}

export default App;
