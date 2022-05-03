const Input = ({ onChange, name, placeholder, value, className }) => {
  return (
    <input
      className={className}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      value={value}
      type="number"
    />
  );
};

export default Input;
