import Select from 'components/ui/select';

import * as s from './styles';

const Input = ({
  data,
  handleSelect,
  defaultValue,
  width,
  center,
  placeholder,
  type,
  value,
  changed,
  withDropdown,
  error,
}) => {
  return (
    <s.Container width={width}>
      <s.Input
        center={center}
        placeholder={placeholder}
        type={type}
        value={value}
        withDropdown={withDropdown}
        disabled={!withDropdown}
        onChange={changed}
      />
      {withDropdown && (
        <Select
          data={data}
          handleSelect={handleSelect}
          defaultValue={defaultValue}
        />
      )}
      {error && <s.ErrorText>{error}</s.ErrorText>}
    </s.Container>
  );
};

export default Input;
