import './App.css';
import NavBar from './components/NavBar';
import Name from './components/Name';
import Counter from './components/counter';
import { Button, Switch } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Timer from './components/timer';

function App() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('Samuel');
  useEffect(() => {
    console.log('james');
  }, [name]);

  function handleshow() {
    setShow(!show);
  }
  const handleChange = () => {
    setName('Elon Musk');
  };
  return (
    <>
      <div>
        <Counter />
        <NavBar />
        <Timer />
        <p>{name}'s website</p>
        <Button
          className="ml-9 bg-slate-900"
          onClick={handleChange}
        ></Button>
        {show && <Name />}
      </div>
      <div className="flex justify-center items-center mt-9">
        <Switch onChange={handleshow} />
      </div>
    </>
  );
}

export default App;
