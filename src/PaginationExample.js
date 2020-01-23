import React from "react";

import useFetch from "./hooks/useFetch";
import usePagination from "./hooks/usePagination";

//example of client-side pagination using React hooks
//currently with !# href, page seems to render twice upon first going to localhost:3000 and clicking to a different page number
//url bar changes to include a !#, then seems to render normally

function PaginationExample({ url }) {
  const [posts, loading] = useFetch(url);

  const { setCurrentPage, postsPerPage, currentPosts } = usePagination(
    posts,
    10
  );

  console.log("posts once", posts); //with this console.log, checking browser console seems to indicate that data is fetched
  //twice. logs "posts once" twice with empty array [], then logs twice again, but with data loaded.
  //what is causing this twice-fetching behavior?

  //when loading page without !# in url, still has above behavior. when clicking to a page number with href=#!, the console.log
  //of "posts once" happens and the data array is loaded with all entries, but then page refreshes and duplicate behavior as above
  //occurs

  //TODO: figure out why this is happening, and see if there's a fix

  return (
    <div>
      <h1>Posts</h1>
      {loading !== true ? (
        <Posts posts={currentPosts} loading={loading} />
      ) : (
        <h2>Loading</h2>
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
    justifyContent: "space-evenly"
  };

  const styleLi = {
    listStyleType: "none"
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
