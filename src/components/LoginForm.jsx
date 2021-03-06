import { Link, useHistory } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import submitLoginService from '../services/users/submitLoginService';
import { validateEmail } from '../helpers/formsValidations';
import {
  Form, LoginField, LoginButton, VisitorButton,
} from '../styles/LoginForm';
import LoadingSvg from '../assets/Loading';
import AppContext from '../context/AppContext';

export default function LoginForm() {
  const {
    setHasAuthentication,
  } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const submitLogin = async (event) => {
    event.preventDefault();
    const validFields = validateEmail(email);
    if (!validFields) {
      setErrorMessage('Invalid email format!');
      return;
    }
    setIsLoading(true);
    setErrorMessage('');
    const response = await submitLoginService(email, password);

    if (response.status === 201) {
      setIsLoading(false);
      localStorage.setItem('token', response.data.token);
      setHasAuthentication(true);
      history.push('/feed');
      return;
    } setIsLoading(false);
    setErrorMessage('Invalid user or password!');
  };

  const redirectAsVisitor = () => (
    history.push('/feed')
  );

  return (
    <Form onSubmit={() => submitLogin()}>
      <LoginField
        type="text"
        name="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        placeholder="Email"
        required
        data-testid="login-field-1"
      />
      <LoginField
        type="password"
        name="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        placeholder="Password"
        required
        data-testid="login-field-2"
      />
      <LoginButton
        onClick={(event) => submitLogin(event)}
        type="submit"
      >
        Sign in
      </LoginButton>
      <VisitorButton
        onClick={() => redirectAsVisitor()}
        type="button"
      >
        Visitor
      </VisitorButton>
      <div>
        { isLoading ? <LoadingSvg /> : null }
        { errorMessage ? <p>{errorMessage}</p> : null }
      </div>
      <p>
        Become a brick!
        {' '}
        <Link to="/register">sign up</Link>
      </p>
    </Form>
  );
}
