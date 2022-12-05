import Head from "next/head";
import { useRouter } from "next/router";

const BlogDynamic = () => {
  const router = useRouter();

  const id = router.query.id;

  return (
    <div>
      <Head>
        <title>Blogs Dynamic</title>
      </Head>
      <h1>This is the page no {id}</h1>
    </div>
  );
};

export default BlogDynamic;
