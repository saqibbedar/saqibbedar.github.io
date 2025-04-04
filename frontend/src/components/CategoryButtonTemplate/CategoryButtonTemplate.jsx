import { useContext, memo} from 'react';
import './CategoryButtonTemplate.css'
import { CategoryContext } from '../../Context/CategoryContext';

const CategoryButtonTemplate = ({Buttons, isCenter, isLoading}) => { 

  const {category, setCategory} = useContext(CategoryContext);

  return (
    <div className='categories-box' style={{justifyContent: isCenter ? "center" : "start"}}>
        {
            Buttons.map((button, index)=>(
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

export default memo(CategoryButtonTemplate)
