import About from './components/Pages/About/About';
import AddPost from './components/Pages/AddPost/AddPost';
import Edit from './components/Pages/Edit/Edit';
import Home from './components/Pages/Home/Home';
import NotFound from './components/Pages/NotFound/NotFound';
import Post from './components/Pages/Post/Post';
import Header from './components/Views/Header/Header';
import Footer from './components/Views/Footer/Footer';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Categories from './components/Pages/Categories/Categories';


const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="post/edit/:id" element={<Edit />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;
