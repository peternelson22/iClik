type Props = {
  id: number;
  username: string;
  img: string;
  userImg: string;
  caption: string;
};
const Post = ({ id, userImg, username, img, caption }: Props) => {
  return (
    <div>
      <h1>{username}</h1>
    </div>
  );
};
export default Post;
