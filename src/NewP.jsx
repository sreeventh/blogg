import React from "react";
import "./comp/Blog.css";
import axios from "axios";

export default function NewP() {
    async function postm() {
        const resp = await axios.post("http://localhost:4000/post/");
    }
    return (
        <>
            <div class="container">
                <h1>
                    New Blog Entry
                </h1>
                <input type="text" name="title" placeholder="Title" required />
                <textarea name="content" placeholder="Content" required rows="10"></textarea>
                <input type="text" name="author" placeholder="Author" required />
                <button className="full-width" onClick={postm}>
                    submit
                </button>
            </div>
        </>
    )
}