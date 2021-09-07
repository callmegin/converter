import { useEffect, useState } from 'react';
import Input from './components/ui/Input';

import * as s from './styles';

const list = [2, 4, 6, 8, 10, 16];

function App() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [base, setBase] = useState(2);
  const [error, setError] = useState('');

  useEffect(() => {
    const parsed = parseInt(inputValue, 10);
    console.log(isNaN(inputValue));
    if (isNaN(inputValue)) return setOutputValue('?????');
    inputValue.trim() !== ''
      ? setOutputValue(parsed.toString(base))
      : setOutputValue('Type Something');
  }, [inputValue, outputValue, base]);

  const changeHandler = (value) => {
    const pattern = /^[0-9]*$/;
    const match = value.match(pattern);
    setInputValue(value);
    if (match) {
      setError('');
    } else {
      setError('Numbers only');
    }
  };

  return (
    <s.Parent justifyCenter alignCenter>
      <Input
        data={list}
        defaultValue={base}
        center={true}
        type="text"
        width="50rem"
        value={inputValue}
        changed={(e) => changeHandler(e.target.value)}
        withDropdown={true}
        handleSelect={(e) => setBase(e.target.value)}
        error={error}
      />
      <Input
        type="text"
        center={true}
        width="50rem"
        placeholder="Type something"
        value={outputValue}
      />
    </s.Parent>
  );
}

export default App;
