import Input from './ui/Input';
import Select from './ui/Select';

const Convertser = ({ form, formChangeHandler }) => {
  return (
    <div className="converter">
      <div className="converter-content">
        <h2>Currency Calculator</h2>

        <div className="form-item">
          <Select onChange={formChangeHandler} name="first_select" value={form.first_select} />
          <Input
            onChange={formChangeHandler}
            name="first_input"
            placeholder="From"
            value={form.first_input}
          />
        </div>
        <div className="form-item">
          <Select onChange={formChangeHandler} name="second_select" value={form.second_select} />
          <Input
            onChange={formChangeHandler}
            name="second_input"
            placeholder="To"
            value={form.second_input}
            className="second-input"
          />
        </div>
        {form.first_select === form.second_select && (
          <p className="error">Please choose different currencies</p>
        )}
      </div>
    </div>
  );
};

export default Convertser;
