import warframeData from "../public/data/war.json";
import CardList from "../components/posts/CardList";
import ViewUserButton from "../components/posts/ViewUserButton";
import postcss from "postcss";

interface War {
  IdFrame: number;
  Nama: string;
  Weapon: string;
  Melee: string;
  Sentinel: string;
}

const Posts = () => {
  const posts: War[] = warframeData.warframes;

  return (
    <>
    <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">POSTINGAN PAGE</h1>
      {posts.map((post) => {
        return (
          <CardList key={post.IdFrame}>
            <p>{post.IdFrame}</p>
            <i>{post.Nama}</i>
            <p>{post.Weapon}</p>
            <p>{post.Melee}</p>
            <p>{post.Sentinel}</p>
            <ViewUserButton userId={post.IdFrame} />
          </CardList>
        );
      })}
    </>
  );
};

export default Posts;
