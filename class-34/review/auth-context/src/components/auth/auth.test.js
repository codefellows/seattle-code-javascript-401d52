import { render, screen, fireEvent } from '@testing-library/react';
import LoginProvider, {LoginContext} from './_context';

describe('Testing the Auth Context Provider', () => {

  test('Should display loggedIn status', () => {
    render(
      <LoginProvider>
        <LoginContext.Consumer>
          {auth => {
            return (
              <>
                <p>Logged in status: {`${auth.loggedIn}`}</p>
              </>
            )
          }}
        </LoginContext.Consumer>
      </LoginProvider>
    )

    expect(screen.getByText(/Logged in status: false/i)).toBeVisible();
  });

  test('Should be able to login with valid Username and password', () => {
    render(
      <LoginProvider>
        <LoginContext.Consumer>
          {auth => {
            return (
             <>
                <button onClick={() => auth.login('Administrator', 'admin')}>login</button>
                <p>Logged in status: {`${auth.loggedIn}`}</p>
             </>
            )
          }}
        </LoginContext.Consumer>
      </LoginProvider>
    );

    let loginBtn = screen.getByText('login');
    fireEvent.click(loginBtn);

    expect(screen.getByText(/Logged in status: true/i)).toBeVisible();
  });
});
