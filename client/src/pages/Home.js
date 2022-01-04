import axios from "axios";
import React, { useEffect, useState } from "react";

export const Home = () => {
  const url = "http://localhost:3333/";
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get(`${url}posts/`).then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      {listOfPosts.map((value, key) => {
        return (
          <div className="post" key={value.id}>
            <div className="title">{value.title} </div>
            <div className="body">{value.postText} </div>
            <div className="footer">{value.username} </div>
          </div>
        );
      })}
    </div>
  );
};
