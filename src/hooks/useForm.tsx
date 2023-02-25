import { useState } from 'react';

export const useForm = <T extends Object> (initialForm: T) => {
    const [form, setForm] = useState(initialForm);

    const onChange = (value: string, field: keyof T) => {
        setForm({
            ...form,
            [field]: value
        });
      };

      return {
        form,
        onChange
      }
}
