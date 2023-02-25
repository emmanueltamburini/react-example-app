import { useForm } from '../hooks/useForm';
export const Form = () => {

  const {form, onChange} = useForm({
    email: 'test@test.com',
    password: '123456'
  });
  return (
    <>
        <h3>Form</h3>
        <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={form.email}
            onChange={({target}) => onChange(target.value , 'email')}
        />

        <input
            type="text"
            className="form-control"
            placeholder="Password"
            value={form.password}
            onChange={({target}) => onChange(target.value , 'password')}
        />

        <code>
            <pre>
                {JSON.stringify(form, null, 2)}
            </pre>
        </code>
    </>
  )
}
