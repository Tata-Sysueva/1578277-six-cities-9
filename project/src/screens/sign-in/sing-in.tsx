import {Link, Navigate} from 'react-router-dom';
import {AppRoute, CITIES, Messages, PATTERNS} from '../../const';
import {FormEvent, useRef, useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {toast} from 'react-toastify';
import Header from '../../components/header/header';
import {changeCity} from '../../store/app/app';
import {getRandomArrayElement} from '../../utils/utils';

function SingIn(): JSX.Element {
  const dispatch = useAppDispatch();
  const [isSuccessSend, setSuccessSend] = useState(false);
  const [isEmailValidity, setEmailValidity] = useState(true);
  const [isPasswordValidity, setPasswordValidity] = useState(true);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);


  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;

    if (
      emailRef.current !== null &&
      passwordRef.current !== null &&
      form.checkValidity()
    ) {
      dispatch(loginAction({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }));
      setSuccessSend(true);
      toast(Messages.LoggedIn);
    }
  };

  const handleEmailChange = () => {
    if (emailRef.current !== null) {
      if (PATTERNS.EMAIL_PATTERN.test(emailRef.current.value)) {
        emailRef.current.setCustomValidity('');
        setEmailValidity(false);
      } else {
        emailRef.current.setCustomValidity(Messages.EmailError);
      }
      emailRef.current.reportValidity();
    }
  };

  const handlePasswordChange = () => {
    if (passwordRef.current !== null) {
      if (PATTERNS.PASSWORD_PATTERN.test(passwordRef.current.value)) {
        passwordRef.current.setCustomValidity('');
        setPasswordValidity(false);
      } else {
        passwordRef.current.setCustomValidity(Messages.PasswordError);
      }
      passwordRef.current.reportValidity();
    }
  };

  const randomCity = getRandomArrayElement(CITIES);

  const handleCity = () => {
    dispatch(changeCity(randomCity));
  };

  return  (
    <div className="page page--gray page--login">
      <Header isAuthorizations={false} />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            {isSuccessSend ?
              <Navigate to={AppRoute.Main} /> :
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
                      onChange={handleEmailChange}
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
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <button
                    className="login__submit form__submit button"
                    type="submit"
                    disabled={isEmailValidity || isPasswordValidity}
                  >
                    Sign in
                  </button>
                </form>
              </>}
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main} onClick={handleCity}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SingIn;
