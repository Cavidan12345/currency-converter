import { useState } from 'react';

const useForm = (initialState) => {
  const [form, setForm] = useState({
    first_input: '',
    first_select: 'UAH',
    second_input: '',
    second_select: 'USD',
    reverse: false,
  });

  const formChangeHandler = (e) => {
    if (e.target.className === 'second-input') {
      setForm((prev) => {
        return {
          ...prev,
          reverse: true,
          [e.target.name]: e.target.value,
        };
      });
    } else {
      setForm((prev) => {
        return {
          ...prev,
          reverse: false,
          [e.target.name]: e.target.value,
        };
      });
    }
  };

  return {
    form,
    setForm,
    formChangeHandler,
  };
};

export default useForm;
