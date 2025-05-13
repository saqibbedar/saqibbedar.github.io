import "./BlogLayout.css";
import { useContext } from "react";
import categoryButtons from "./categoryButtons";
import { BlogContext } from "@/context/BlogContext";
import { CategoryContext } from "@/context/CategoryContext";
import {
  LayoutInfoTemplate,
  CategoryButtonTemplate,
} from "@/components/templates/templates";
import { useBlogs } from "@/context/BlogContext";
import { Link } from "react-router-dom";

const BlogLayout = () => {
  const { category } = useContext(CategoryContext);
  const { blogs } = useBlogs(BlogContext);
  const allBlogs = blogs.allBlogs(category);
  
  const sectionTitle =
    category === "All" ? "All Blogs" : `Category: "${category}"`;

  return (
    <div className="blog-page-layout-wrapper">
      <LayoutInfoTemplate
        layoutHeading={"Explore your favorite Blogs"}
        layoutDescription={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem rerum blanditiis a officiis incidunt natus illum, velit, porro molestias nulla alias. Amet consequuntur at atque, et odit officiis sunt."
        }
      />
      <CategoryButtonTemplate Buttons={categoryButtons} isCenter={true} />
      <br />
      <div className="section-info">
        <h1>{sectionTitle}</h1>
      </div>
      {allBlogs.map((blog) => {
        return (
          <Link to={`/blogs/${blog._id}`} key={blog._id} className="blog-container">
            <div className="blog-container-img">
              <img src={blog.image} alt="" />
            </div>
            <div className="blog-container-content">
              <div className="blog-container-title">{blog.title}</div>
              <div className="blog-container-description">
                {blog.description}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogLayout;
