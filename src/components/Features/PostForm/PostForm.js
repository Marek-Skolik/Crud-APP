import { Button, Col, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from "react-hook-form";

const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date())
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [dateError, setDateError] = useState(false);
    const [contentError, setContentError] = useState(false);

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const handleSubmit = () => {
        setContentError(!content);
        setDateError(!publishedDate);
        if(content && publishedDate) {
          action({ title, author, publishedDate, shortDescription, content });
        }
      };

    return (
        <Row className="justify-content-center">
            <Col className="col-7">
                <Form onSubmit={validate(handleSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            {...register("title", { required: true, minLength:3 })}
                            value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter title" />
                            {errors.title && <small className="d-block form-text text-danger mt-2">This field is required and it must have min.3 signs</small>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Author</Form.Label>
                        <Form.Control 
                            {...register("author", { required: true, minLength:3 })}
                            value={author} onChange={e => setAuthor(e.target.value)} type="text" placeholder="Enter author" />
                            {errors.title && <small className="d-block form-text text-danger mt-2">This field is required and it must have min.3 signs</small>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Published</Form.Label>
                        <DatePicker selected={publishedDate ? publishedDate : new Date()} onChange={(date) => setPublishedDate(new Date(date))} />
                        {dateError && <small className="d-block form-text text-danger mt-2">Date is required</small>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Short description</Form.Label>
                        <Form.Control 
                                {...register("short description", { required: true, minLength:20 })}
                                value={shortDescription} onChange={e => setShortDescription(e.target.value)} type="text" 
                                as="textarea" style={{ height: '100px' }} placeholder="Leave a comment here" />
                                {errors.title && <small className="d-block form-text text-danger mt-2">This field is required and it must have min.20 signs</small>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Main content</Form.Label>
                        <ReactQuill theme="snow" value={content} onChange={setContent} />
                        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
                    </Form.Group>

                    <Button type="submit" className="my-3">Add post</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default PostForm;
































