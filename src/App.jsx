import React, { useEffect, useState } from "react";
import Blog from "./comp/Blog";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./comp/Blog.css"

export default function App() {
  const apiUrl = "http://localhost:4000/post/";

  const [bd, setBd] = useState([]);
  const [ed, setEd] = useState({});
  const [edd, setE] = useState(false);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      setBd(data);
    }
    getPosts();
  }, []);

  async function delpost(id) {
    if (window.confirm("Are you sure?")) {
      const resp = await axios.delete(`http://localhost:4000/post/${id}`);
      if (resp.status === 200) {
        window.location.reload();
      }
    }
  }

  async function editpost(id) {
    const response = await fetch(`http://localhost:4000/post/${id}`);
    const data = await response.json();
    console.log(data);
    setEd(data);
    setE(true);
  }

  async function epatch(id) {
    const resp = await axios.patch(`http://localhost:4000/post/${id}`, ed);
    setE(false);
    window.location.reload();
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setE(false);
    }
  };

  const EditComp = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
      title: ed.title,
      content: ed.content,
      author: ed.author
    });

    // Update state on input change
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };

    return (
      <div className="overlay" onClick={handleOverlayClick}>
        <div className="edit-container">
          <h3>Edit Blog Entry: {ed.title}</h3>
          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            value={formData.title}
            onChange={handleChange}
          />
          <textarea
            name="content"
            placeholder="Content"
            required
            rows="10"
            value={formData.content}
            onChange={handleChange}
          ></textarea>
          <input
            type="text"
            name="author"
            placeholder="Author"
            required
            value={formData.author}
            onChange={handleChange}
          />
          <button className="full-width" onClick={() => epatch(ed.id)}>
            Submit
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>MyBlogz!</h1>
      <Link style={{ marginLeft: "400px" }} to="/new">
        <button id="newPostBtn">New Post</button>
      </Link>
      {bd.map((a) => (
        <Blog
          key={a.id}
          title={a.title}
          content={a.content}
          date={a.date}
          auth={a.author}
          delp={delpost}
          editp={editpost}
          id={a.id}
        />
      ))}
      {edd && <EditComp />}
    </>
  );
}
