import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../../API/user-service';
import { useFetching } from '../../hooks/useFetching';
import { useTextField } from '../../hooks/useTextField';
import { IUser } from '../../models/IUser';
import Profile from './Profile';

const ProfileContainer: React.FC = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState<IUser | null>(null);

  const profileForm = {
    name: useTextField(profile?.name || ''),
    username: useTextField(profile?.username || ''),
    email: useTextField(profile?.email || ''),
    street: useTextField(profile?.address.street || ''),
    city: useTextField(profile?.address.city || ''),
    zipCode: useTextField(profile?.address.zipcode || ''),
    phone: useTextField(profile?.phone || ''),
    website: useTextField(profile?.website || ''),
    comment: useTextField(''),
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

  const handleSubmitForm = () => {};

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
    <Profile handleSubmitForm={handleSubmitForm} profileForm={profileForm} />
  );
};

export default ProfileContainer;
