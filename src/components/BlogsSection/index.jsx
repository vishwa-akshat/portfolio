import React from "react";

import "./style.scss";

export default function BlogsSection({ blogPosts }) {
    const blogs = blogPosts.map((blog, index) => {
        return {
            id: index < 10 ? `0${index}` : index,
            name: blog.title,
            img: blog.coverImage,
            blogUrl: `https://akshatv.hashnode.dev/${blog.slug}`,
        };
    });

    return (
        <div className="blogs-section">
            <h1 className="heading">Blogs</h1>
            <div className="blogs-wrapper">
                {blogs.map((blog, index) => {
                    return (
                        <div key={index} className="wrapper">
                            <div className="blog-number">{blog.id}</div>
                            <div className="blog-img-wrapper">
                                <img
                                    src={blog.img}
                                    className="blog-img"
                                    alt={blog.name}
                                />
                                <div className="backdrop">
                                    <a
                                        className="links"
                                        href={blog.blogUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View Blog
                                    </a>
                                </div>
                            </div>
                            <h3 className="name">{blog.name}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
