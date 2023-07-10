'use client';

import minifaker from 'minifaker';
import { useEffect, useState } from 'react';

interface Faker {
  username: string;
  jobTitle: string;
  id: number;
}
const Suggestion = () => {
  const [suggestions, setSugestions] = useState<Faker[]>([]);

  useEffect(() => {
    const suggestions = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      jobTitle: minifaker.jobTitle(),
      id: i,
    }));
    setSugestions(suggestions);
  }, []);

  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between mb-5 text-sm'>
        <h3 className='font-bold text-gray-500'>Suggestions for you</h3>
        <button className='text-gray-600 font-semibold'>Sell all</button>
      </div>
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className='flex items-center justify-between mt-3'
        >
          <img
            src={`https://i.pravatar.cc/150?img=${Math.ceil(
              Math.random() * 70
            )}`}
            alt='suggestion'
            className='h-10 rounded-full border p-[2px]'
          />
          <div className='flex-1 ml-4'>
            <h2 className='font-semibold text-sm'>{suggestion.username}</h2>
            <h3 className='text-gray-400 text-sm truncate w-[230px]'>
              {suggestion.jobTitle}
            </h3>
          </div>
          <button className='font-semibold text-blue-400 text-sm'>
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};
export default Suggestion;
