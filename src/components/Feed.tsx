import Posts from './Posts';
import Stories from './Stories';

type Props = {};
const Feed = (props: Props) => {
  return (
    <main>
      <section>
        <Stories />
      </section>
      <section>
        <Posts />
      </section>
    </main>
  );
};
export default Feed;
