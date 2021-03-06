import React, { FC } from 'react';
import { defineMessages } from 'react-intl';
import './ConnectionPage.component.scss';
import { InputComponent } from '../../components/input/Input.component';
import { ButtonComponent } from '../../components/button/Button.component';

const messages = defineMessages({
  connectionPage_usernameInput: {
    defaultMessage: 'Your username',
    id: 'connectionPage.usernameInput',
  },
  connectionPage_passwordInput: {
    defaultMessage: 'Your password',
    id: 'connectionPage.passwordInput',
  },
  connectionPage_connectionTitle: {
    defaultMessage: 'Log In',
    id: 'connectionPage.connectionTitle',
  },
  connectionPage_usernameTitle: {
    defaultMessage: 'Username :',
    id: 'connectionPage.usernameTitle',
  },
  connectionPage_passwordTitle: {
    defaultMessage: 'Password :',
    id: 'connectionPage.passwordTitle',
  },
  connectionPage_submitConnection: {
    defaultMessage: 'Log In',
    id: 'connectionPage.submitConnection',
  },
  connectionPage_errorInput: {
    defaultMessage: 'Your Username / Password is incorrect',
    id: 'connectionPage.errorInput',
  },
});

interface ConnectionPageComponentProps {
  isError: boolean;
  onConnection: (e: React.FormEvent<HTMLFormElement>) => void;
  formatMessage: (message: { defaultMessage: string; id: string }) => string;
}

export const ConnectionPageComponent: FC<ConnectionPageComponentProps> = ({
  isError, onConnection, formatMessage,
}) => (
  <div className="connection-page">
    <h1>{formatMessage(messages.connectionPage_connectionTitle)}</h1>
    <form className="connection-page__wrapper" onSubmit={onConnection}>
      {isError && (
      <div className="connection-page__wrapper__error-input">
        {formatMessage(messages.connectionPage_errorInput)}
      </div>
      )}
      <div>
        <h2>
          {formatMessage(messages.connectionPage_usernameTitle)}
        </h2>
        <InputComponent name="username" type="text" inputsize="small" placeholder={formatMessage(messages.connectionPage_usernameInput)} />
      </div>
      <div>
        <h2>{formatMessage(messages.connectionPage_passwordTitle)}</h2>
        <InputComponent name="password" type="password" inputsize="small" placeholder={formatMessage(messages.connectionPage_passwordInput)} />
      </div>
      <div className="connection-page__wrapper__connection-button">
        <ButtonComponent type="submit" designType="full">
          {formatMessage(messages.connectionPage_submitConnection)}
        </ButtonComponent>
      </div>
    </form>
  </div>
);
