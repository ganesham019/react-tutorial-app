import React, { useState, useEffect } from "react";
import axios from "axios";
function DataFetching1() {
  const [post, setPost] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Something Went Wrong");
      });
    //   .then((json) => console.log(json));
  }, []);
  return (
    <>
      {loading ? "Loading" : post.title}
      {error ? error : null}
    </>
  );
}

export default DataFetching1;
