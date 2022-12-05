import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import PostCard from "../components/Post/PostCard";

export const getStaticProps = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    return {
      props: {
        posts: data,
      },
    };
  } catch (error) {
    console.log(error.message);
  }
};

export default function Home({ posts }) {
  console.log(posts);

  return (
    <div>
      <Banner />
      <div className="grid grid-cols-4 gap-5 my-5">
        {posts?.slice(0, 4).map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
