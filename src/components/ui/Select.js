const options = [{ value: 'UAH' }, { value: 'USD' }, { value: 'EUR' }];

const Select = ({ name, value, onChange }) => {
  return (
    <select name={name} onChange={onChange} value={value}>
      {options.map(({ value }) => {
        return (
          <option key={value} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
