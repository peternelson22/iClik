import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { AiFillHome } from 'react-icons/ai';
import { BiPlusCircle } from 'react-icons/bi';

type Props = {};
const Header = (props: Props) => {
  return (
    <header className='flex items-center justify-between max-w-6xl xl:mx-auto mt-4 mx-4'>
      <div className='cursor-pointer relative hidden lg:inline-grid'>
        <Image
          src='/logo.png'
          height={150}
          width={150}
          alt='Logo'
          className='object-contain h-12'
        />
      </div>
      <div className='cursor-pointer relative lg:hidden pr-2'>
        <Image
          src='/icon.png'
          height={40}
          width={60}
          alt='Logo'
          className='object-contain h-9'
        />
      </div>
      <div className=' relative mt-1'>
        <div className='absolute top-2 left-2'>
          <CiSearch className='h-5 text-gray-600' />
        </div>
        <input
          type='text'
          placeholder='search'
          className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md'
        />
      </div>
      <div className='flex space-x-2 items-center'>
        <AiFillHome className='hidden md:inline-flex cursor-pointer h-6 hover:scale-125 transition-transform duration-200 ease-out' />
        <BiPlusCircle className='cursor-pointer h-6 hover:scale-125 transition-transform duration-200 ease-out' />
        <Image src="/10.jpg" height={40} width={30} alt='Me' className='rounded-lg cursor-pointer object-cover'/>
      </div>
    </header>
  );
};
export default Header;
