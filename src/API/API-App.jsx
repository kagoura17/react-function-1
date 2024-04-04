import React from 'react';
import { useEffect, useState } from "react";

const App = () => {
  const [resourc, setResourc] = useState("posts");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourc}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [resourc]);
  return (
    <>
      <button onClick={() => setResourc("posts")}>posts</button>
      <button onClick={() => setResourc("users")}>users</button>
      <button onClick={() => setResourc("comments")}>comments</button>
      <h1>{resourc}</h1>
      {data.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
};

export default App;
