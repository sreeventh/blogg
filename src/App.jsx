import React, { useEffect, useState } from "react";
import Blog from "./comp/Blog";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function App() {
  const apiUrl = "http://localhost:4000/post/";

  const [bd, setBd] = useState([]);


  useEffect(() => {
    async function getPosts() {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      setBd(data);
    }
    getPosts();
  }, [])

  async function delpost(id){
    if(window.confirm("Are you sure?")){
      const resp = await axios.delete(`http://localhost:4000/post/${id}`);
      if(resp.status === 200){
        window.location.reload();
      }
    }
  }


  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>MyBlogz!</h1>
      <Link style={{marginLeft:"400px"}} to="/new">
        <button id="newPostBtn">New Post</button>
      </Link>
      {bd.map((a) => (
        <Blog
          title={a.title}
          content={a.content}
          date={a.date}
          auth={a.author}
          delp = {delpost}
          id = {a.id}
        />
      ))}
    </>
  );
}
