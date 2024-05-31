'use server';

import { FieldValues } from 'react-hook-form';

const userRegister = async (userData: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/register`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(userData),
    cache: 'no-store',
  });
  return await res.json();
};

export default userRegister;
