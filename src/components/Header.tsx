import Image from 'next/image';

type Props = {};
const Header = (props: Props) => {
  return (
    <header>
      <div className='flex items-center justify-between max-w-6xl mx-auto'>
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
        <div className="">
            right
        </div>
      </div>
    </header>
  );
};
export default Header;
