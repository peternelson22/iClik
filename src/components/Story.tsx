import Image from 'next/image';

type Props = {
  username: string;
  img: string;
};

const Story = ({ username, img }: Props) => {
  return (
    <div>
      <Image src={img} alt={username} width={30} height={30} />
      <p>{username}</p>
    </div>
  );
};
export default Story;
