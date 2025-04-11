import "./FeaturedBlogPosts.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "@/context/BlogContext.jsx";
import { FeaturedBlogPostCard } from "@/components/reusable/reusable";

const FeaturedBlogPosts = () => {
  const { blogs } = useContext(BlogContext);

  const featureBlogs = blogs.featureBlogs();

  return (
    <>
      <div className="f-post-wrapper">
        <div className="f-blog-sec-info">
          <h1>Featured Blog Post</h1>
        </div>

        <div className="f-blog-content">
          {/* add some other algorithm to show view more button */}
          {featureBlogs.map((blog, index) => {
            if (index === featureBlogs.length) {
              return (
                <div className="f-post-btn" key={index}>
                  <Link to={"/Blog"} className="f-post-view-more-btn">
                    VIEW <br />
                    MORE
                  </Link>
                </div>
              );
            } else {
              return (
                <FeaturedBlogPostCard
                  key={blog._id}
                  _id={blog._id}
                  description={blog.description}
                  image={blog.image}
                  title={blog.title}
                  category={blog.category}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default FeaturedBlogPosts;
