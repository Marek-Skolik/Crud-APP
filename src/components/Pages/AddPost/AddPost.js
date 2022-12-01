import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddPostForm from '../../Features/AddPostForm/AddPostForm';
import { addPost } from "../../../redux/postRedux";

const AddPost = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = post => {
      dispatch(addPost(post));
      navigate("/")
    };

    return (
        <AddPostForm action={handleSubmit} />
    )
}

export default AddPost;