import Image from 'next/image';
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
      <Image src={img} alt='user' height={160} width={160} />
    </div>
  );
};
export default Post;
