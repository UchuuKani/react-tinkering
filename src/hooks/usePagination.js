import { useState } from "react";

function usePagination(data) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const indexOfLastPost = postsPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  return {
    currentPage,
    setCurrentPage,
    postsPerPage,
    setPostsPerPage,
    currentPosts
  };
}

export default usePagination;
