import { useRouter } from "next/router";

const PostDetails = ({ post }) => {
  const router = useRouter();
  const backButtonHandler = () => {
    router.push(`/`);
  };

  return (
    <div className="card bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <div className="card-actions justify-end">
          <button onClick={backButtonHandler} className="btn">
            Back to posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export const getStaticPaths = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const paths = data.map((post) => {
      return {
        params: {
          id: `${post.id}`,
        },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const getStaticProps = async (context) => {
  const {
    params: { id },
  } = context;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();

    return {
      props: {
        post: data,
      },
    };
  } catch (error) {
    console.log(error.message);
  }
};
