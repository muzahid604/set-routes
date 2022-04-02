
import { Route, Routes } from 'react-router';
import './App.css';
import Friends from './componets/Friends/Friends';
import Heder from './componets/Header/Heder';
import Home from './componets/Home/Home'
import Post from './componets/Post/Post';
import Posts from './componets/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Heder></Heder>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/posts' element={<Posts></Posts>}>
          <Route path=':postId' element={<Post></Post>}></Route>
        </Route>
        <Route path='/friends' element={<Friends />}></Route>
      </Routes>
    </div>
  );
}

export default App;
