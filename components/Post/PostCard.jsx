import Link from "next/link";
import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="card my-20 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>

        <div className="card-actions justify-end">
          <Link href={`/post/${post.id}`}>
            {" "}
            <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
