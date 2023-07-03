import React from 'react';

const TextInput = ({ name, type, inner }) => {
  return (
    <div className='group relative mb-6 w-full'>
      <input
        type={type}
        name={name}
        id={name}
        className=' peer block w-full appearance-none border-0 border-b-2 border-maingray bg-transparent px-0 py-2.5 text-sm text-dark focus:border-primary focus:outline-none focus:ring-0 dark:border-maingray dark:text-light dark:focus:border-primary'
        placeholder=' '
        required
      />
      <label
        htmlFor={name}
        className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-maingray duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-primary dark:text-maingray peer-focus:dark:text-primary'
      >
        {inner}
      </label>
    </div>
  );
};

export default TextInput;
