import { useRef, useState, useEffect } from "react";
import "./Search.css";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import JsonData from "../../assets/Search_Data.json";
import { ErrorImages, icons} from "../../assets/assets"
import ErrorPage from "../ErrorPage/ErrorPage";

const buttons = [
  { label: "All" },
  { label: "Blog" },
  { label: "Latest Project" },
  { label: "Projects" },
];

const Search = (props) => {
  const { handleSearch, customClass } = props;
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === '/') {
        event.preventDefault();
        if(inputRef.current) {
          inputRef.current.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const [activeButton, setActiveButton] = useState("All");
  const filterData = JsonData.filter(val => val.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

  // const [data, setData] = useState([])
  // const [activeButton, setActiveButton] = useState(0);




  // useEffect(()=>{
  //   const fetchSearchData = async () => {
  //     const res = await axios.get(`${BaseURL}?q=${query}`);
  //     setData(res.data)
  //   };
  //   fetchSearchData();
  // }, [query])
  return (
    <div>
      <div className={`search-box ${customClass}`}>
        <form className="box" onSubmit={ (e) => e.preventDefault() }>
          <input type="text" onChange={e => setSearch(e.target.value)} ref={inputRef} placeholder="Search" />
        </form>
        <div className="results">
          {/* adjust here... */}
          <div className="categories" style={{display:"none"}}>
            <div className="btn">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={activeButton === button.label ? "btn-active" : ""}
                  onClick={() => setActiveButton(button.label)}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>

          <div className="founded-items">
            {
              search === '' ? 
              <ErrorPage img={""} title={<span style={{fontSize: "40px", fontWeight: "800", display: "flex", color: "var(--link-color)"}}>Hello <div className="animatedHand">👋</div></span>} description={"Start searching your favorite"} isButton={false}/> 
              : (
                filterData.length > 0 ? (
                  filterData.map( val =>
                    (
                      <Link key={val.id} to={val.link} className="founded-item-box">
                      <div className="founded-item-box-content">
                        <div>{val.title}</div>
                        <div className="founded-item-box-content-description">{val.description}</div>
                      </div>
                      <div className="founded-item-box-icon">{<icons.rightArrow/>}</div>
                    </Link>
                    ) 
                  )
                ) 
              : 
                <ErrorPage img={ErrorImages.no_result2} imgContainerHeight={"auto"} imgContainerWidth={"auto"} title={"No result found"} description={"We could'nt find what you searched for. Try searching again."} isButton={false}/>
              )
            }
          </div>
        </div>
        <div onClick={handleSearch} id="close">
          <FiX title="close" />
        </div>
      </div>
    </div>
  );
};

export default Search;
