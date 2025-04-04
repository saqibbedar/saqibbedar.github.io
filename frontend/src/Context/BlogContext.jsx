import React, { createContext, useEffect, useState } from "react";
import { featuredBlogPostsData } from "../assets/assets";

export const BlogContext = createContext();

const BlogProvider = ({children}) =>{

    const [blogsData, setBlogsData] = useState([]);
    
    useEffect(()=>{
        setBlogsData(featuredBlogPostsData);
    }, [])

    const All_Blogs = (category) => {
        
        const selectedCategory = category.toLowerCase();

        return blogsData.filter(blog =>{
            if(selectedCategory === 'all') return true;
            const blogCategory = blog.category.toLowerCase()
            return blogCategory === selectedCategory;
        })
    }

    const featuredBlogs = ()=>{
        return blogsData;
    }
    
    const blogs = {
        All_Blogs,
        featuredBlogs,
    }

    return (
        <BlogContext.Provider value={{blogs}}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogProvider;