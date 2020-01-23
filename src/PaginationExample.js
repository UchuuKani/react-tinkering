import React from "react";

import useFetch from "./hooks/useFetch";
import usePagination from "./hooks/usePagination";

//example of client-side pagination using React hooks

function PaginationExample() {
  const [posts, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const { setCurrentPage, postsPerPage, currentPosts } = usePagination(posts);

  return (
    <div>
      <h1>Posts</h1>
      {loading !== true ? (
        <Posts posts={currentPosts} loading={loading} />
      ) : (
        <h2>loading</h2>
      )}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
      />
    </div>
  );
}

function Posts({ posts, loading }) {
  if (loading === true) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {posts.map(post => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ul>
  );
}

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const styleNav = {
    display: "flex",
    "justify-content": "space-evenly"
  };

  const styleLi = {
    "list-style-type": "none"
  };

  return (
    <nav style={styleNav}>
      {pageNumbers.map(pageNumber => {
        return (
          <li key={pageNumber} style={styleLi}>
            <a
              onClick={() => {
                paginate(pageNumber);
              }}
              href="!#"
            >
              {pageNumber}
            </a>
          </li>
        );
      })}
    </nav>
  );
}

export default PaginationExample;
