import { PostsType } from "@/types/types";
import { useState } from "react";

const useLatestPosts = ({ posts }: PostsType) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = posts.filter((post) =>
      post?.data.blog_title?.toLowerCase().includes(query),
    );
    setFilteredPosts(filtered);
  };
  const displayedPosts = filteredPosts.slice(0, 3);

  return {
    displayedPosts,
    searchQuery,
    handleSearchChange,
    setSearchQuery,
  };
};

export default useLatestPosts;
