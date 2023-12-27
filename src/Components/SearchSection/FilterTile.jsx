import React,{useState} from 'react'
import { FaCheckCircle } from "react-icons/fa";


const FilterTile = ({color,count,heading,value}) => {

  const [check, setCheck] = useState(false);
  
  function ApplyChecked(e){
    e.stopPropagation();
    if(!e.target.classList.contains('FilterTile')){
      console.log(e.target)
      e.target.parentNode.classList.toggle("height");
    }else{
      e.target.classList.toggle("height");
      console.log(e.target)
    }
    setCheck(!check);
  }

  const style = {
    backgroundColor: color, 
  }

  return (
    <div className='FilterTile' style={style} onClick={ApplyChecked}>
      {check && <FaCheckCircle className='checkbox'/>}
      <h4 className='value'>{value}</h4>
      <h4 className='heading'>{heading}</h4>
      <div className='count'>{count}</div>
    </div>
  )
}

export default FilterTile