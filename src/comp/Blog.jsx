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
                        <a onClick={() => props.editp(props.id)} className="edit">Edit</a>
                        <a onClick={() => props.delp(props.id)} className="delete">Delete</a>
                    </li>
                </ul>
            </div>
        </>
    )
}