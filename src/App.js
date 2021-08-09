import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserScreen from './components/UserScreen';
import AddScreen from './components/AddScreen';
import { Col, Container, Row } from 'react-bootstrap';
import CitesScreen from "./components/CitesScreen";
function App() {
  return (
		<Container className="py-5">
			<Row>
				<Col>
					{/* <AddScreen /> */}
					{/* <UserScreen /> */}
					<CitesScreen />
				</Col>
			</Row>
		</Container>
  );
}

export default App;
