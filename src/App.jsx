import './App.css';
import NavBar from './components/NavBar';
import Name from './components/Name';
import Welcome from './components/welcome';
import { Switch } from '@chakra-ui/react';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  function handleshow() {
    setShow(!show);
  }
  return (
    <>
      <div>
        <Welcome />
        <NavBar />
        {show && <Name />}
      </div>
      <div className="flex justify-center items-center mt-9">
        <Switch onChange={handleshow} />
      </div>
    </>
  );
}

export default App;
