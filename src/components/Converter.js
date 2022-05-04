import { useEffect } from 'react';

// Hooks
import useForm from '../hooks/useForm';

// API
import { getCurrency } from '../lib/api';

//
import Input from './ui/Input';
import Select from './ui/Select';

const Converter = () => {
  const { form, setForm, formChangeHandler } = useForm();

  const isFormValid =
    form.first_select !== form.second_select &&
    (form.first_input.length !== 0 || form.second_input.length !== 0);

  useEffect(() => {
    if (isFormValid) {
      let params = {
        params: {
          format: 'json',
          from: form.reverse ? form.second_select : form.first_select,
          to: !form.reverse ? form.second_select : form.first_select,
          amount: form.reverse ? form.second_input : form.first_input,
        },
      };

      getCurrency({ params })
        .then((data) => {
          if (!form.reverse) {
            setForm((prev) => {
              return {
                ...prev,
                second_input: data.data.rates[form.second_select].rate_for_amount,
              };
            });
          }
          if (form.reverse) {
            setForm((prev) => {
              return {
                ...prev,
                first_input: data.data.rates[form.first_select].rate_for_amount,
              };
            });
          }
        })
        .catch((err) => console.log(err));
    }
  }, [
    isFormValid,
    form.first_input,
    form.reverse,
    form.second_input,
    form.second_select,
    form.first_select,
    setForm,
  ]);

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

export default Converter;
