import { useForm } from "../../hooks";
import { RegisterProps } from "../../models";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
};

const Register = ({onRouteChange, loadeUser}: RegisterProps) => {
  const [values, handleChange] = useForm<RegisterFormValues>({
      name: '',
      email: '',
      password: '',
  });

  const onRegister = () => {
    fetch('https://radiant-plateau-91423.herokuapp.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          loadeUser(user);
          onRouteChange('home');
        }
      });
  };

  return (
    <main className="pa4 dark-green-80">
      <div className="measure center">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0">Register</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="name">
              Name
            </label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-dark-green hover-white w-100"
              type="text"
              name="name"
              value={values.name}
              id="name"
              onChange={handleChange}
            />
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">
              Email
            </label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-dark-green hover-white w-100"
              type="email"
              name="email"
              value={values.email}
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">
              Password
            </label>
            <input
              className="b pa2 input-reset ba bg-transparent hover-bg-dark-green hover-white w-100"
              type="password"
              name="password"
              value={values.password}
              id="password"
              onChange={handleChange}
            />
          </div>
        </fieldset>
        <div className="">
          <input
            onClick={onRegister}
            className="b ph3 pv2 input-reset ba b--dark-green bg-transparent grow pointer f6 dib"
            type="submit"
            value="Register"
          />
        </div>
      </div>
    </main>
  );
}

export default Register;
