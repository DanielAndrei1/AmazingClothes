import './App.css';
import {Col, Row} from 'react-bootstrap'
import Computer from './Images/Computer2.jpg'
import SecondShowcase from './Images/SecondShowcase2.jpg'
import ThirdShowcase from './Images/ThirdShowCase2.jpg'
import Case1 from './Images/Case3.jpg'
import CPU from './Images/CPU2.jpg'
import Case2 from './Images/Case4.jpg'
import { Card } from "react-bootstrap"
import Header from './Header';
import Showcase from './Showcase';
import Comentari from './Comentari';
import Confidentialitate from './Confidentialitate';

function App() {
  return (
<div className="App">
    <Header />
    <Showcase />
<Row md={2} xs={1} lg={3} className='g-3'>
    <Col>
        <Card>
          <Card.Img variant="top" src={Computer} height="400px" style={{ objectFit: "cover"}} loading="eager" priority="low">
          </Card.Img>
          <Card.Body className="d-flex flex-column">
            <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>
                <span className='fs-2'>Computer</span>
                <span className='fs-2'>$189.66</span>
            </Card.Title>
            </Card.Body>
        </Card> 
    </Col>

    <Col>
        <Card>
          <Card.Img variant="top" src={SecondShowcase} height="400px" style={{ objectFit: "cover"}} loading="eager" priority="low">
          </Card.Img>
          <Card.Body className="d-flex flex-column">
            <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>
                <span className='fs-2'>Test</span>
                <span className='fs-2'>$59.66</span>
            </Card.Title>

          </Card.Body>

        </Card> 
    </Col>

    <Col>
        <Card>
        <Card.Img variant="top" src={ThirdShowcase} height="400px" style={{ objectFit: "cover"}} loading="eager" priority="low">

          </Card.Img>
          <Card.Body className="d-flex flex-column">
            <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>
                <span className='fs-2'>Clothes</span>
                <span className='fs-2'>$189.66</span>
            </Card.Title>
            </Card.Body>
        </Card> 
    </Col>


    <Col>
        <Card>
        <Card.Img variant="top" src={Case1} height="400px" style={{ objectFit: "cover"}} loading="eager" priority="low">

          </Card.Img>
          <Card.Body className="d-flex flex-column">
            <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>
                <span className='fs-2'>Case</span>
                <span className='fs-2'>$55.66</span>
            </Card.Title>
            </Card.Body>
        </Card> 
    </Col>

    
    <Col>
        <Card>
        <Card.Img variant="top" src={CPU} height="400px" style={{ objectFit: "cover"}} loading="eager" priority="low">


          </Card.Img>
          <Card.Body className="d-flex flex-column">
            <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>
                <span className='fs-2'>CPU</span>
                <span className='fs-2'>$49.66</span>
            </Card.Title>
            </Card.Body>

        </Card> 
    </Col>

    
    <Col>
        <Card>
        <Card.Img variant="top" src={Case2} height="400px" style={{ objectFit: "cover"}} loading="eager" priority="low">


          </Card.Img>
          <Card.Body className="d-flex flex-column">
            <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>
                <span className='fs-2'>Case Airflow</span>
                <span className='fs-2'>$200.66</span>
            </Card.Title>
            </Card.Body>

        </Card> 
    </Col>


      </Row>

      <Comentari/>
    <Confidentialitate />
    </div>
  );
}

export default App;
