import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';

type Props = {};
const Header = (props: Props) => {
  return (
    <header className='flex items-center justify-between max-w-6xl mx-auto mt-2'>
      <div className='cursor-pointer relative hidden lg:inline-grid'>
        <Image
          src='/logo.png'
          height={150}
          width={150}
          alt='Logo'
          className='object-contain'
        />
      </div>
      <div className='cursor-pointer relative lg:hidden'>
        <Image
          src='/icon.png'
          height={60}
          width={60}
          alt='Logo'
          className='object-contain '
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
      <div className=''>right S</div>
    </header>
  );
};
export default Header;
