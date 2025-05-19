import './CategoryTabs.css'
import { memo} from 'react';
import { useCategory } from '@/context';

/**
 * 
 * @param {Object} props - component props
 * @param {Array} props.categories - Array of category names
 * @param {string} props.align - Alignment of tabs ("start" or "center")
 * @param {string} props.className - Additional CSS classes
 */

const CategoryTabs = ({ categories, align="start", className="", ...props }) => { 

  const {category, setCategory} = useCategory();

  return (
    <div className={`categories-box ${className}`} style={{justifyContent: align}}>
        {
            categories.map((button, index)=>(
                <button  
                key={index} 
                onClick={()=>{
                  setCategory(button)
                }} 
                className= {category === button ? "category-btn active-category" : "category-btn"} 
                >
                  {button}
                </button>
            ))
        }
    </div>
  )
}

export default memo(CategoryTabs);
   