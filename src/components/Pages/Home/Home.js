import { Col, Row } from "react-bootstrap";
import Posts from '../../Features/Posts/Posts';

const Home = () => {
    return (
        <>
        <Row>
            <Col className="d-flex justify-content-between">
                <h1>All posts</h1>
            </Col>
        </Row> 
        <Posts /> 
        </>  
    )
}

export default Home;