import "./BlogLayout.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import categoryButtons from "./categoryButtons";
import { BlogContext } from "@/context/BlogContext";
import { CategoryContext } from "@/context/CategoryContext";
import {
  LayoutInfoTemplate,
  CategoryButtonTemplate,
} from "@/components/templates/templates";

const BlogLayout = () => {
  const { category } = useContext(CategoryContext);

  const { blogs } = useContext(BlogContext);

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
      {allBlogs.map((item, index) => {
        return (
          <Link to={item.link} key={index} className="blog-container">
            <div className="blog-container-img">
              <img src={item.img} alt="" />
            </div>
            <div className="blog-container-content">
              <div className="blog-container-title">{item.title}</div>
              <div className="blog-container-description">
                {item.description}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogLayout;
