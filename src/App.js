import logo from './logo.svg';
import './App.css';

import {Route, Routes, useNavigate} from 'react-router'

import Main from '../src/pages/mainPage'
import Sub from '../src/pages/subPage'
import { Button } from 'react-bootstrap';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Project of <code>React</code> for study.
        </p>
        <Button variant="info" onClick={() => {navigate("/main")}}>main</Button>
        <br/>
        <Button variant="info" onClick={() => {navigate("/sub")}}>sub</Button>
        <Routes>
          <Route path="/main" element={<Main/>} />
          <Route path="/sub" element={<Sub/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
