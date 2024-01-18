'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

type DeleteButtonProps = {
  apiUrl: string;
};

const DeleteButton = ({ apiUrl }: DeleteButtonProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    await fetch(apiUrl, {
      method: 'DELETE',
    });

    router.push('/');
    router.refresh();
  };

  return (
    <div
      className='bg-red-600 hover:bg-red-500 py-3 px-3 font-medium rounded-md inline cursor-pointer'
      onClick={handleDelete}
    >
      削除する
    </div>
  );
};

export default DeleteButton;
