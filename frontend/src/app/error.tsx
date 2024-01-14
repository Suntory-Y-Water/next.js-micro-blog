'use client';
import React from 'react';

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className='mt-4 font-bold'>
      <h3 className='font-bold mb-2'>エラーが発生しました</h3>
      <button
        onClick={() => reset()}
        className='py-2 px-5 my-2 rounded-md bg-red-600 hover:bg-red-500'
      >
        もう一度試す
      </button>
    </div>
  );
};

export default Error;
