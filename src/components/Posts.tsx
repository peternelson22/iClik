import Post from './Post';

interface Post {
  id: number;
  username: string;
  userImg: string;
  img: string;
  caption: string;
}

const Posts = () => {
  const posts: Post[] = [
    {
      id: 1,
      username: 'Nelson',
      userImg: './logo.png',
      img: './10.jpg',
      caption: 'Hello there',
    },
    {
      id: 2,
      username: 'Nelson',
      userImg: './logo.png',
      img: './10.jpg',
      caption: 'Hello there',
    },
    {
      id: 3,
      username: 'Nelson',
      userImg: './logo.png',
      img: './10.jpg',
      caption: 'Hello there',
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          caption={post.caption}
          userImg={post.userImg}
          img={post.img}
        />
      ))}
    </div>
  );
};
export default Posts;
