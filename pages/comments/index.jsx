import React from "react";

const index = ({ comments }) => {
  return (
    <div>
      {comments?.map((comment) => (
        <h1 className="my-5 mx-10 text-3xl" key={comment.id}>
          {comment.body}
        </h1>
      ))}
    </div>
  );
};

export default index;

export const getServerSideProps = async () => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments`
    );
    const data = await response.json();
    return {
      props: {
        comments: data,
      },
    };
  } catch (error) {
    console.log(error.message);
  }
};
