import { useForm } from "../../hooks";
import { SigninProps } from "../../models";

interface SigninFormValues {
  email: string;
  password: string;
};

const Signin = ({onRouteChange, loadeUser}: SigninProps) => {
  const [values, handleChange] = useForm<SigninFormValues>({
      email: '',
      password: '',
  });

  const onSubmitSignIn = () => {
    fetch('https://radiant-plateau-91423.herokuapp.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          loadeUser(user);
          onRouteChange('home');
        }
      });
  };
  return (
    <main className="pa4 dark-green-80">
      <div className="measure center">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0">Sign In</legend>
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
            onClick={onSubmitSignIn}
            className="b ph3 pv2 input-reset ba b--dark-green bg-transparent grow pointer f6 dib"
            type="submit"
            value="Sign in"
          />
        </div>
        <div className="lh-copy mt3">
          <p onClick={() => onRouteChange('register')} className="f6 link dim dark-green db pointer">
            Register
          </p>
        </div>
      </div>
    </main>
  );
}

export default Signin;
