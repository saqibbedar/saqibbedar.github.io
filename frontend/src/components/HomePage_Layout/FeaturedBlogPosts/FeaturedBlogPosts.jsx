import "./FeaturedBlogPosts.css";
import FeaturedBlogPostCard from "../../Reusable Components/FeaturedBlogPostCard/FeaturedBlogPostCard";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { BlogContext } from "../../../Context/BlogContext.jsx";


const FeaturedBlogPosts = () => {

  const {blogs} = useContext(BlogContext);

  const featuredBlogs = blogs.featuredBlogs();

  return (
    <> 
      <div className="f-post-wrapper">

        <div className="f-blog-sec-info">
          <h1>Featured Blog Post</h1>
        </div>

        <div className="f-blog-content">
          {featuredBlogs.map((item, index) => {
            if(index === featuredBlogs.length-1) {
              return <div className="f-post-btn" key={index}><Link to={"/Blog"} className="f-post-view-more-btn">VIEW <br/>MORE</Link></div>
            } else{
              return <FeaturedBlogPostCard key={index} link={item.link} description={item.description} img={item.img} title={item.title} />
            }
          }
          )}
        </div>
      </div>
    </>
  );
};

export default FeaturedBlogPosts;
