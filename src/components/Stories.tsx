'use client';

import minifaker from 'minifaker';
import 'minifaker/locales/en';
import { useEffect, useState } from 'react';
import Story from './Story';

type Props = {
  username: string;
  img: string;
};

interface StoryUsers {
  username: string;
  img: string;
  id: number;
}

const Stories = () => {
  const [stories, setStories] = useState<StoryUsers[]>([]);

  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStories(storyUsers);
    //console.log(storyUsers);
  }, []);

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-50'>
      {stories.map((story) => (
        <Story key={story.id} username={story.username} img={story.img} />
      ))}
    </div>
  );
};
export default Stories;
