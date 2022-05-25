import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../../API/user-service';
import { useFetching } from '../../hooks/useFetching';
import { useTextField } from '../../hooks/useTextField';
import { IProfileForm, IValidForm } from '../../models/IProfileForm';
import { IUser } from '../../models/IUser';
import { checkValidForm } from '../../utils/checkValidForm';
import { getValues } from '../../utils/getValues';
import Profile from './Profile';

const ProfileContainer: React.FC = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState<IUser | null>(null);

  const profileForm = {
    name: useTextField(profile?.name || '', { isEmpty: true, minLength: 2 }),
    username: useTextField(profile?.username || '', {
      isEmpty: true,
      minLength: 2,
    }),
    email: useTextField(profile?.email || '', { isEmpty: true }),
    street: useTextField(profile?.address.street || '', { isEmpty: true }),
    city: useTextField(profile?.address.city || '', { isEmpty: true }),
    zipCode: useTextField(profile?.address.zipcode || '', { isEmpty: true }),
    phone: useTextField(profile?.phone || '', { isEmpty: true }),
    website: useTextField(profile?.website || '', { isEmpty: true }),
    comment: useTextField('', { isEmpty: false }),
  };

  const fetchingCb = useCallback(async (id: string) => {
    const data = await UserService.getById(Number(id));

    setProfile(data);
  }, []);

  const {
    fetching: fetchUserProfile,
    isLoading: isUserProfileLoading,
    error: userProfileError,
  } = useFetching(fetchingCb);

  useEffect(() => {
    fetchUserProfile(id);
  }, [id, fetchUserProfile]);

  const handleSubmitForm = (formData: IProfileForm) => {
    const profile = getValues(formData, 'value');
    console.log('profile:', profile);
  };

  const validateInfo: IValidForm = getValues(profileForm, 'isTextFieldValid');
  const isValidForm = checkValidForm(validateInfo);

  if (isUserProfileLoading) {
    return <div>Loading...</div>;
  }

  if (userProfileError) {
    return (
      <div>
        Произошла ошибка:{' '}
        <span style={{ color: 'crimson' }}>{userProfileError}</span>
      </div>
    );
  }

  return (
    <Profile
      handleSubmitForm={handleSubmitForm}
      isValidForm={isValidForm}
      profileForm={profileForm}
    />
  );
};

export default ProfileContainer;
