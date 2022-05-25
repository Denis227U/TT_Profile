import React, { useState } from 'react';
import TextField from '../../components/UI/input/TextField';
import { IProfileForm } from '../../models/IProfileForm';
import cl from './Profile.module.scss';

interface ProfileProps {
  profileForm: IProfileForm;
  handleSubmitForm: (profileForm: IProfileForm) => void;
}

const Profile: React.FC<ProfileProps> = ({ profileForm, handleSubmitForm }) => {
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
        <button onClick={() => setEditMode((prev) => !prev)}>
          Редактировать
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={cl.formBlock}>
          <label className={cl.formLabel}>
            Name
            <TextField
              type="text"
              value={profileForm.name.value}
              onChange={(e) => profileForm.name.onChange(e)}
              disabled={!editMode}
            />
          </label>
          <label className={cl.formLabel}>
            User name
            <TextField
              type="text"
              value={profileForm.username.value}
              onChange={(e) => profileForm.username.onChange(e)}
              disabled={!editMode}
            />
          </label>
          <label className={cl.formLabel}>
            E-mail
            <TextField
              type="email"
              value={profileForm.email.value}
              onChange={(e) => profileForm.email.onChange(e)}
              disabled={!editMode}
            />
          </label>
          <label className={cl.formLabel}>
            Street
            <TextField
              type="text"
              value={profileForm.street.value}
              onChange={(e) => profileForm.street.onChange(e)}
              disabled={!editMode}
            />
          </label>
          <label className={cl.formLabel}>
            City
            <TextField
              type="text"
              value={profileForm.city.value}
              onChange={(e) => profileForm.city.onChange(e)}
              disabled={!editMode}
            />
          </label>
          <label className={cl.formLabel}>
            Zip code
            <TextField
              type="text"
              value={profileForm.zipCode.value}
              onChange={(e) => profileForm.zipCode.onChange(e)}
              disabled={!editMode}
            />
          </label>
          <label className={cl.formLabel}>
            Phone
            <TextField
              type="text"
              value={profileForm.phone.value}
              onChange={(e) => profileForm.phone.onChange(e)}
              disabled={!editMode}
            />
          </label>
          <label className={cl.formLabel}>
            Website
            <TextField
              type="text"
              value={profileForm.website.value}
              onChange={(e) => profileForm.website.onChange(e)}
              disabled={!editMode}
            />
          </label>

          <label className={`${cl.formLabel} ${cl.formLabel_large}`}>
            Comment
            <TextField
              value={profileForm.comment.value}
              onChange={(e) => profileForm.comment.onChange(e)}
              multiline="true"
              disabled={!editMode}
            />
          </label>
        </div>

        <div className={cl.btns}>
          <button className="sendBtn" disabled={!editMode}>
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
