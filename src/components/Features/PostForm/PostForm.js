import { Button, Col, Form, Row } from 'react-bootstrap';
import { useState } from 'react';

const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
      };

    return (
        <Row className="justify-content-center">
            <Col className="col-7">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter title" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Author</Form.Label>
                        <Form.Control value={author} onChange={e => setAuthor(e.target.value)} type="text" placeholder="Enter author" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Published</Form.Label>
                        <Form.Control value={publishedDate} onChange={e => setPublishedDate(e.target.value)} type="text" placeholder="Enter date" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Short description</Form.Label>
                        <Form.Control value={shortDescription} onChange={e => setShortDescription(e.target.value)} type="text" 
                                      as="textarea" style={{ height: '100px' }} placeholder="Leave a comment here" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Main content</Form.Label>
                        <Form.Control value={content} onChange={e => setContent(e.target.value)} type="text" as="textarea" style={{ height: '200px' }} placeholder="Leave a comment here" />
                    </Form.Group>

                    <Button onClick={handleSubmit} className="my-3">Add post</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default PostForm;
































