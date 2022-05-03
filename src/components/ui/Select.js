const Select = ({ name, value, onChange }) => {
  return (
    <select name={name} onChange={onChange} value={value}>
      <option value="UAH">UAH</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
    </select>
  );
};

export default Select;
