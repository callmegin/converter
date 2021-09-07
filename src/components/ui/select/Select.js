import * as s from './styles';

const Select = ({ data, defaultValue, handleSelect }) => {
  return (
    <s.Select value={defaultValue} onChange={handleSelect}>
      {data.map((el, index) => (
        <option key={index} value={el}>
          {el}
        </option>
      ))}
    </s.Select>
  );
};

export default Select;
