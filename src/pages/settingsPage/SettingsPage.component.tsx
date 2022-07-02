import './SettingsPage.component.scss';
import React, { FC } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { InputComponent } from '../../components/input/Input.component';
import { ButtonComponent } from '../../components/button/Button.component';

const messages = defineMessages({
  settingsPage_mailInput: {
    defaultMessage: 'john.doe@mail.com',
    id: 'settingsPage.mailInput',
  },
  settingsPage_usernameInput: {
    defaultMessage: 'John33',
    id: 'settingsPage.usernameInput',
  },
  settingsPage_firstNameInput: {
    defaultMessage: 'John',
    id: 'settingsPage.firstNameInput',
  },
  settingsPage_firstNameTitle: {
    defaultMessage: 'Your first name',
    id: 'settingsPage.firstNameTitle',
  },
  settingsPage_nameInput: {
    defaultMessage: 'Doe',
    id: 'settingsPage.nameInput',
  },
  settingsPage_usernameTitle: {
    defaultMessage: 'Username',
    id: 'settingsPage.usernameTitle',
  },
  settingsPage_birthDateInput: {
    defaultMessage: '1980-04-02',
    id: 'settingsPage.birthDateInput',
  },
  settingsPage_passwordInput: {
    defaultMessage: 'Your password',
    id: 'settingsPage.passwordInput',
  },
  settingsPage_signupTitle: {
    defaultMessage: 'Settings',
    id: 'settingsPage.signupTitle',
  },
  settingsPage_mailTitle: {
    defaultMessage: 'Mail :',
    id: 'settingsPage.mailTitle',
  },
  settingsPage_nameTitle: {
    defaultMessage: 'Your name',
    id: 'settingsPage.nameTitle',
  },
  settingsPage_birthDateTitle: {
    defaultMessage: 'Your birth date',
    id: 'settingsPage.birthDateTitle',
  },
  settingsPage_passwordTitle: {
    defaultMessage: 'Password :',
    id: 'settingsPage.passwordTitle',
  },
  settingsPage_submitSignUp: {
    defaultMessage: 'Edit',
    id: 'settingsPage.submitSignUp',
  },
});

interface SettingsPageComponentProps {
  formatMessage: (message: { defaultMessage: string; id: string }) => string;
}

export const SettingsPageComponent: FC<SettingsPageComponentProps> = ({ formatMessage }) => (
  <div className="settings-page">
    <h1>{formatMessage(messages.settingsPage_signupTitle)}</h1>
    <form className="settings-page__wrapper" onSubmit={() => {}}>
      <div className="settings-page__wrapper__mail-input">
        <h2>{formatMessage(messages.settingsPage_mailTitle)}</h2>
        <InputComponent type="email" name="email" inputsize="small" placeholder={formatMessage(messages.settingsPage_mailInput)} />
      </div>
      <div className="settings-page__wrapper__username-input">
        <h2>{formatMessage(messages.settingsPage_usernameTitle)}</h2>
        <InputComponent type="text" name="username" inputsize="small" placeholder={formatMessage(messages.settingsPage_usernameInput)} />
      </div>
      <div className="settings-page__wrapper__birth-date-input">
        <h2>{formatMessage(messages.settingsPage_birthDateTitle)}</h2>
        <InputComponent type="text" name="birth-date" inputsize="small" placeholder={formatMessage(messages.settingsPage_birthDateInput)} />
      </div>
      <div className="settings-page__wrapper__password-input">
        <h2>{formatMessage(messages.settingsPage_passwordTitle)}</h2>
        <InputComponent type="password" name="password" inputsize="small" placeholder={formatMessage(messages.settingsPage_passwordInput)} />
      </div>
      <div className="settings-page__wrapper__signup-button">
        <ButtonComponent type="submit" designType="full">
          {formatMessage(messages.settingsPage_submitSignUp)}
        </ButtonComponent>
      </div>
    </form>
  </div>
);
