type Props = {};
const MiniProfile = (props: Props) => {
  return (
    <aside className='flex items-center justify-between mt-14 ml-10'>
      <img
        src='/10.jpg'
        alt=''
        className='h-14 w-14 rounded-full border p-[2px] object-cover'
      />
      <div className='flex-1 ml-4'>
        <h2 className='font-bold'>@nelson</h2>
        <h3 className='text-gray-500 text-sm'>Welcome to iClik</h3>
      </div>
      <button className='font-semibold text-blue-400 text-sm hover:scale-105'>
        Sign out
      </button>
    </aside>
  );
};
export default MiniProfile;
