'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { config } from '@/lib/config';

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    await fetch(`${config.API_URL}/api/blog/${id}`, {
      method: 'DELETE',
    });

    router.push('/');
    router.refresh();
  };

  return (
    <div
      className='bg-red-500 hover:bg-red-400 py-3 px-3 font-medium rounded-md inline cursor-pointer'
      onClick={handleDelete}
    >
      削除する
    </div>
  );
};

export default DeleteButton;
