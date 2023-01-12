import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";

const Categories = () => {
    const categories = useSelector(getAllCategories);

    return (
        <>
            <Row>
                <Col className="text-center">
                <h1>All categories</h1>
                </Col>
            </Row>
            <Row xs={1} md={1} lg={1}>
                {categories.map(category => (
                    <Card key={category}>
                    <Card.Body>
                        <Link to={"/category/" + category}>{category}</Link>
                    </Card.Body>
                    </Card>
                ))}
            </Row>
        </>
    )
}

export default Categories;