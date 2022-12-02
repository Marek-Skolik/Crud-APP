import { Button, Col, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postRedux';


const AddPostForm = () => {

    const dispatch = useDispatch();

    const [ title, setTitle ] = useState("");
    const [ author, setAuthor ] = useState("");
    const [ published, setPublished ] = useState("");
    const [ shortDescription, setShortDescription ] = useState("");
    const [ content, setContent ] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost({title, author, published, shortDescription, content }));
        setTitle("");
        setAuthor("");
        setPublished("");
        setShortDescription("");
        setContent("");
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
                        <Form.Control value={published} onChange={e => setPublished(e.target.value)} type="text" placeholder="Enter date" />
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

export default AddPostForm;