import React from 'react';

import { useDispatch } from 'react-redux';

import { useForm } from 'react-hook-form';

import { setUserFields } from '../../redux/appSlice';

import NewProfile from './NewProfile';

export default function NewProfileContainer({ onClick }) {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(setUserFields(data));
    onClick();
  };

  return (
    <NewProfile
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
    />
  );
}
