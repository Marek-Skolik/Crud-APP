import { getPostById } from '../../../redux/postRedux';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {Button, Row, Col, Card } from "react-bootstrap";



const Post = () => {

    const { id } = useParams();

    const postData = useSelector (state => getPostById(state, id));

    return (
        <Row className="justify-content-center">
            <Col className="col-6">
                <Card className="border-0">
                    <Card.Body>
                        <Card.Title><h1>{postData.title}</h1></Card.Title>
                        <Card.Text className="my-0"><strong>Author: </strong>{postData.author}</Card.Text>
                        <Card.Text className="my-0"><strong>Published: </strong>{postData.publishedDate}</Card.Text>
                        <Card.Text><strong>Content: </strong>{postData.content}</Card.Text>
                        <Card.Text>{postData.shortDescription}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-3">
                <Link to={"post/edit/:id" + id}><Button className="my-3 mx-3" variant="outline-info">Edit</Button></Link>
            </Col>
        </Row>
    )
}

export default Post;