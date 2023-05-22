import { useState, useEffect } from "react";

import Navbar from "components/Navbar";
import About from "components/About";
import ProjectSection from "components/ProjectSection";
import Footer from "components/Footer";
import LoadingScreen from "components/LoadingScreen";
import BlogsSection from "components/BlogsSection";

import "./style.scss";

async function blogsRequest(query) {
    const response = await fetch("https://api.hashnode.com/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
        Authorization: process.env.REACT_APP_API_KEY,
    });
    return await response.json();
}

function App() {
    const [loading, setLoading] = useState(true);
    const [blogPosts, setBlogPosts] = useState();

    useEffect(() => {
        if (!blogPosts) {
            const query = `
                          {
                          user(username: "akshatV") {
                            publication {
                              posts{
                                slug
                                title
                                brief
                                coverImage
                              }
                            }
                          }
                          }
                          `;
            blogsRequest(query).then((res) => {
                setBlogPosts(res.data.user.publication.posts);
            });
        }
    }, []);

    if (loading) {
        return <LoadingScreen setLoading={setLoading} />;
    }

    return (
        <div className="container">
            <Navbar />
            <div className="hero-section">
                <div className="hider">scroll down</div>
                <div className="hero-3d-object">
                    <iframe
                        title="Earth 3D Model"
                        src="https://my.spline.design/untitled-5711b2136528fef6ff0adf122f22ac2d/"
                        frameborder="0"
                        width="100%"
                        height="100%"
                    ></iframe>
                </div>
                <div className="content-wrapper">
                    <div className="name">Akshat Vishwakarma</div>
                    <div className="position">Software developer</div>
                    <div className="portfolio-text">portfolio</div>
                </div>
                <div className="scroll-down-wrapper">
                    <div className="line" />
                    <div className="line line-lg" />
                    <div className="line" />
                </div>
            </div>
            <About />
            <ProjectSection />
            <BlogsSection blogPosts={blogPosts} />
            <Footer />
        </div>
    );
}

export default App;
