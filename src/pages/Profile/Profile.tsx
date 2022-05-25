import React, { useState } from 'react';
import MainButton from '../../components/UI/button/MainButton';
import TextField from '../../components/UI/input/TextField';
import { IProfileForm } from '../../models/IProfileForm';
import cl from './Profile.module.scss';

interface ProfileProps {
  profileForm: IProfileForm;
  isValidForm: boolean;
  handleSubmitForm: (profileForm: IProfileForm) => void;
}

const Profile: React.FC<ProfileProps> = ({
  profileForm,
  isValidForm,
  handleSubmitForm,
}) => {
  console.log('profileForm:', profileForm);

  const [editMode, setEditMode] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleSubmitForm(profileForm);
  };

  return (
    <div>
      <div className={cl.header}>
        <h2>Профиль пользоваетля</h2>
        <MainButton onClick={() => setEditMode((prev) => !prev)}>
          Редактировать
        </MainButton>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={cl.formBlock}>
          <label className={cl.formLabel}>
            Name
            <TextField
              type="text"
              value={profileForm.name.value}
              onChange={(e) => profileForm.name.onChange(e)}
              isNotValid={
                editMode &&
                profileForm.name.isDirty &&
                profileForm.name.minLength
              }
              onBlur={(e) => profileForm.name.onBlur(e)}
              disabled={!editMode}
            />
            {profileForm.name.isDirty && profileForm.name.minLength && (
              <span style={{ color: 'crimson' }}>
                Минимальная длина 2 буквы
              </span>
            )}
          </label>
          <label className={cl.formLabel}>
            User name
            <TextField
              type="text"
              value={profileForm.username.value}
              onChange={(e) => profileForm.username.onChange(e)}
              isNotValid={
                editMode &&
                profileForm.username.isDirty &&
                profileForm.username.minLength
              }
              onBlur={(e) => profileForm.username.onBlur(e)}
              disabled={!editMode}
            />
            {profileForm.username.isDirty && profileForm.username.minLength && (
              <span style={{ color: 'crimson' }}>
                Минимальная длина 2 буквы
              </span>
            )}
          </label>
          <label className={cl.formLabel}>
            E-mail
            <TextField
              type="email"
              value={profileForm.email.value}
              onChange={(e) => profileForm.email.onChange(e)}
              isNotValid={
                editMode &&
                profileForm.email.isDirty &&
                profileForm.email.isEmpty
              }
              onBlur={(e) => profileForm.email.onBlur(e)}
              disabled={!editMode}
            />
          </label>
          <label className={cl.formLabel}>
            Street
            <TextField
              type="text"
              value={profileForm.street.value}
              onChange={(e) => profileForm.street.onChange(e)}
              isNotValid={
                editMode &&
                profileForm.street.isDirty &&
                profileForm.street.isEmpty
              }
              onBlur={(e) => profileForm.street.onBlur(e)}
              disabled={!editMode}
            />
          </label>
          <label className={cl.formLabel}>
            City
            <TextField
              type="text"
              value={profileForm.city.value}
              onChange={(e) => profileForm.city.onChange(e)}
              isNotValid={
                editMode && profileForm.city.isDirty && profileForm.city.isEmpty
              }
              onBlur={(e) => profileForm.city.onBlur(e)}
              disabled={!editMode}
            />
          </label>
          <label className={cl.formLabel}>
            Zip code
            <TextField
              type="text"
              value={profileForm.zipCode.value}
              onChange={(e) => profileForm.zipCode.onChange(e)}
              isNotValid={
                editMode &&
                profileForm.zipCode.isDirty &&
                profileForm.zipCode.isEmpty
              }
              onBlur={(e) => profileForm.zipCode.onBlur(e)}
              disabled={!editMode}
            />
          </label>
          <label className={cl.formLabel}>
            Phone
            <TextField
              type="text"
              value={profileForm.phone.value}
              onChange={(e) => profileForm.phone.onChange(e)}
              isNotValid={
                editMode &&
                profileForm.phone.isDirty &&
                profileForm.phone.isEmpty
              }
              onBlur={(e) => profileForm.phone.onBlur(e)}
              disabled={!editMode}
            />
          </label>
          <label className={cl.formLabel}>
            Website
            <TextField
              type="text"
              value={profileForm.website.value}
              onChange={(e) => profileForm.website.onChange(e)}
              isNotValid={
                editMode &&
                profileForm.website.isDirty &&
                profileForm.website.isEmpty
              }
              onBlur={(e) => profileForm.website.onBlur(e)}
              disabled={!editMode}
            />
          </label>

          <label className={`${cl.formLabel} ${cl.formLabel_large}`}>
            Comment
            <TextField
              value={profileForm.comment.value}
              onChange={(e) => profileForm.comment.onChange(e)}
              isNotValid={
                editMode &&
                profileForm.comment.isDirty &&
                profileForm.comment.isEmpty
              }
              onBlur={(e) => profileForm.comment.onBlur(e)}
              multiline="true"
              disabled={!editMode}
            />
          </label>
        </div>

        <div className={cl.btns}>
          <MainButton className="sendBtn" disabled={!(editMode && isValidForm)}>
            Отправить
          </MainButton>
        </div>
      </form>
    </div>
  );
};

export default Profile;
