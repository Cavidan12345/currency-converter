import { useState } from 'react';

const useForm = ({ defaultCurrencyType, isActive }) => {
  const [form, setForm] = useState({
    input: '',
    select: defaultCurrencyType,
    isActive: isActive,
  });
  return {
    form,
    setForm,
  };
};

export default useForm;
