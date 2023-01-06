import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import { getAllPosts } from "../../../redux/postRedux";
import { useSelector } from "react-redux";
import DateToStr from "../../../utils/DateToStr";

const Posts = () => {

    const posts = useSelector(getAllPosts)

  return (
    <Row xs={1} md={2} lg={3}>
      {posts.map(post => (
        <Col key={post.id}>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text className="my-0"><strong>Author: </strong>{post.author}</Card.Text>
              <Card.Text><strong >Published: </strong><DateToStr date={post.publishedDate}/></Card.Text>
              <Card.Text className="mb-3">{post.shortDescription}</Card.Text>
              <Link to={"/post/" + post.id}><Button variant="primary">Read more</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Posts;