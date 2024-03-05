import React, { useState } from "react";
import "./comp/Blog.css";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export default function NewP() {
    // State to hold form data
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: ''
    });
    const Navigate = useNavigate();

    // Update state on input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Post data to server
    async function postm(e) {
        e.preventDefault(); // Prevent default form submission
        try {
            const resp = await axios.post("http://localhost:4000/post/", formData);
            console.log(resp.data);
            Navigate("/");
            
            // Handle success (e.g., clearing form, showing a message)
        } catch (error) {
            console.error("There was an error!", error);
            // Handle error
        }
    }

    return (
        <>
            <div className="container">
                <h1>New Blog Entry</h1>
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
                <button className="full-width" onClick={postm}>
                    Submit
                </button>
            </div>
        </>
    );
}
