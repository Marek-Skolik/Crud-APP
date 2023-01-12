import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Category from "../../Features/Category/Category";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";

const Categories = () => {

    const category = useSelector(getAllCategories)

    return (
        <>
        <Row>
            <Col className="text-center">
            <h1>All categories</h1>
            </Col>
        </Row>
        <Link key={category} to={"/posts/" + category}>
            <Category />
        </Link>
        </>
    )
}

export default Categories;