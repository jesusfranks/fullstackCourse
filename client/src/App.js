import "./App.css";
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from "./pages/Home";
import { CreatePost } from "./pages/CreatePost";

function App() {
  return (
    <div className="App">
      <Link to="/newPost">Create a new post</Link>
      <Link to="/">Home page</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newPost" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
