import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserScreen from './components/UserScreen';
import AddScreen from './components/AddScreen';
import { Col, Container, Row } from 'react-bootstrap';
function App() {
  return (
    <Container className="py-5">
      <Row>
        <Col>
        <h1 className="text-center">Hello world</h1>
        <AddScreen />
        <UserScreen />
        </Col>
      </Row>
      
     
    </Container>
  );
}

export default App;
