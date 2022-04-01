
import { Route, Routes } from 'react-router';
import './App.css';
import Friends from './componets/Friends/Friends';
import Home from './componets/Home/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/friends' element={<Friends />}></Route>
      </Routes>
    </div>
  );
}

export default App;
