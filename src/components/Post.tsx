import Image from 'next/image';
import { BsBookmarkCheck, BsChatDots, BsHeart } from 'react-icons/bs';
import { PiDotsThreeVerticalBold } from 'react-icons/pi';

type Props = {
  id: number;
  username: string;
  img: string;
  userImg: string;
  caption: string;
};

const Post = ({ id, userImg, username, img, caption }: Props) => {
  return (
    <div className='bg-white my-7 border rounded-md'>
      <div className='flex items-center p-5'>
        <Image
          src={userImg}
          alt='user'
          height={40}
          width={30}
          className='h-6 w-6 rounded-full object-cover border p-1 mr-3 cursor-pointer'
        />
        <p className='font-bold  flex-1'>{username}</p>
        <PiDotsThreeVerticalBold className='h-5 cursor-pointer' />
      </div>
      <Image src={img} alt='user' height={760} width={760} />
      <div className='flex justify-between px-4 pt-4'>
        <div className='flex space-x-4'>
          <BsHeart className='btn' />
          <BsChatDots className='btn' />
        </div>
        <BsBookmarkCheck className='btn' />
      </div>
    </div>
  );
};
export default Post;
