'use client';

import { useState, useEffect, SetStateAction } from 'react';
import minifaker, { number } from 'minifaker';
import 'minifaker/locales/en';
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
    <div>
      {stories.map((story) => (
        <Story key={story.id} username={story.username} img={story.img} />
      ))}
    </div>
  );
};
export default Stories;
