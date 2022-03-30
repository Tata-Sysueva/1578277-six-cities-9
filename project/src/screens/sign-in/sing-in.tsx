import {Link} from 'react-router-dom';
import {AppRoute, TIMEOUT_SHOW_ERROR} from '../../const';
import {FormEvent, useRef, useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/auth-data';
import {toast} from 'react-toastify';
import FormSend from '../../components/form-send/form-send';

function SingIn(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const [isSuccessSend, setState] = useState(false);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
    setState(true);
  };

  toast.configure({
    position: toast.POSITION.TOP_CENTER,
    autoClose: TIMEOUT_SHOW_ERROR,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  const pattern = /^(?=.*[0-9])(?=.*[a-z])/i;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;

    if (
      emailRef.current !== null &&
      passwordRef.current !== null &&
      form.checkValidity()
    ) {
      onSubmit({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      toast('Successful!');
    }
  };

  const handleInputChange = () => {
    if (passwordRef.current !== null) {
      if (pattern.test(passwordRef.current.value)) {
        passwordRef.current.setCustomValidity(' ');
      } else {
        passwordRef.current.setCustomValidity('Invalid password. You need letters and numbers');
      }
      passwordRef.current.reportValidity();
    }
  };

  return  (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className="header__logo-link"
                to={AppRoute.Main}
              >
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            {isSuccessSend ?
              <FormSend /> :
              <>
                <h1 className="login__title">Sign in</h1>
                <form
                  className="login__form form"
                  action="/#"
                  method="post"
                  onSubmit={handleSubmit}
                >
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">E-mail</label>
                    <input
                      ref={emailRef}
                      className="login__input form__input"
                      type="email" name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">Password</label>
                    <input
                      ref={passwordRef}
                      className="login__input form__input"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <button className="login__submit form__submit button" type="submit">Sign in</button>
                </form>
              </>}
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SingIn;
