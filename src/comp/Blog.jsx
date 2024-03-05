import React from "react";
import "./Blog.css"

export default function Blog(props) {
    return (
        <>
            <div className="container">
                <ul id="postsList">
                    <li>
                        <h2>
                            {props.title}
                        </h2>
                        <small>
                            {props.date}
                        </small>
                        <p>
                            {props.content}
                        </p>
                        <small>By: {props.auth}</small>
                        <a className="edit">Edit</a>
                        <a className="delete">Delete</a>
                    </li>
                </ul>
            </div>
        </>
    )
}