
import { useEffect } from "react";
import { useState } from "react";


const Blog = () => {
    const [blogs, setBloges] = useState([]);

    useEffect(() =>{
           fetch("blog.json")
           .then(res => res.json())
           .then(data => setBloges(data))
    }, []) 
    return (
        <div>
            <h2>We Are Bloges</h2>
        </div>
    );
};

export default Blog;