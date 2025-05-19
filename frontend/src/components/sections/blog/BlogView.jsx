import "./BlogView.css";
import { useCategory, useBlogs } from "@/context";
import { SectionHeader } from "@/components/layout";
import { CategoryTabs } from "@/components/ui";
import { Link } from "react-router-dom";

const BlogView = () => {
  const { category } = useCategory();
  const { blogs } = useBlogs();
  const allBlogs = blogs.allBlogs(category);
  
  const sectionTitle = category === "All" ? "All Blogs" : `Category: "${category}"`;

  return (
    <div className="blog-page-layout-wrapper">
      <SectionHeader
        layoutHeading={"Explore your favorite Blogs"}
        layoutDescription={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem rerum blanditiis a officiis incidunt natus illum, velit, porro molestias nulla alias. Amet consequuntur at atque, et odit officiis sunt."
        }
      />
      <CategoryTabs categories={["All", "Projects", "Certificates"]} align="center" />
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

export default BlogView;
