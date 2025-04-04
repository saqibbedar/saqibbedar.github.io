import "./BlogPage_Layout.css";
import CategoryButtonTemplate from "../CategoryButtonTemplate/CategoryButtonTemplate";
import { useContext } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import {Link} from "react-router-dom"
import Layout_Info_Template from "../Layout_Info_Template/Layout_Info_Template";
import { BlogContext } from "../../Context/BlogContext";

const CategoryButtons = [
  "All",
  "Education",
  "Technology",
  "Programming",
  "Projects",
];

const BlogPage_Layout = () => {
  const { category } = useContext(CategoryContext);
  
  const {blogs} = useContext(BlogContext);

  const All_Blogs = blogs.All_Blogs(category);
  
  const sectionTitle = category === "All" ? "All Blogs" : `Category: "${category}"`;

  return (
    <div className="blog-page-layout-wrapper">
      <Layout_Info_Template 
      layoutHeading={"Explore your favorite Blogs"}
      layoutDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem rerum blanditiis a officiis incidunt natus illum, velit, porro molestias nulla alias. Amet consequuntur at atque, et odit officiis sunt."}
      />
      <CategoryButtonTemplate Buttons={CategoryButtons} isCenter={true} />
      <br />
      <div className="section-info">
        <h1>
          {sectionTitle}
        </h1>
      </div>
      {All_Blogs.map((item, index)=>{
        return <Link to={item.link} key={index} className="blog-container">
        <div className="blog-container-img">
          <img src={item.img} alt="" />
        </div>
        <div className="blog-container-content">
          <div className="blog-container-title">{item.title}</div>
          <div className="blog-container-description">{item.description}</div>
        </div>
        </Link>
       })
      }
    </div>
  );
};

export default BlogPage_Layout;
