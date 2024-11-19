"use client";
import { CiSearch } from "react-icons/ci";
import LatestPostCard from "../latestPostCard/LatestPostCard";
import useLatestPosts from "./useLatestPosts";
import { PostsType } from "@/types/types";

function LatestPosts({ posts }: PostsType) {
  const { displayedPosts, searchQuery, handleSearchChange } = useLatestPosts({
    posts,
  });

  return (
    <div className="">
      <div className="flex h-[46px] w-full items-center rounded-full border-[1px] border-silver pl-4">
        <CiSearch color="grey" size={25} />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full rounded-full pl-2 focus:outline-none"
        />
      </div>
      <p className="my-5 text-[20px] text-grey">Latest Posts</p>
      {displayedPosts.length > 0 ? (
        displayedPosts.map((post, index) => (
          <LatestPostCard
            key={index}
            blogTitle={post.data.blog_title}
            imageUrl={post.data.image.url}
            publicationDate={post.data.publication_date}
            uid={post.uid}
          />
        ))
      ) : (
        <p className="text-greyText">No posts found.</p>
      )}
    </div>
  );
}

export default LatestPosts;
