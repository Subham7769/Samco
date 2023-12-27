import React from 'react';
import './ResultBody.css';
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";

import brand from '../../Assets/brand.jpg';

const ResultBody = () => {

  document.addEventListener('DOMContentLoaded', function () {
    var tableContainer = document.querySelector('.table-container');
    var tableHeader = document.querySelector('.table-container thead');
  
    tableContainer.addEventListener('scroll', function () {
      var scrollY = this.scrollTop;
      tableHeader.style.transform = 'translateY(' + scrollY + 'px)';
    });
  });
  
  function changeColor(e){
    e.target.classList.toggle("active");
  }

  let rows = [];
  for(let i = 1; i <= 100; i++) {
    rows.push(
      <tr key={i}>
        <td>
          <span><img src={brand} alt="" /> <span> Edelweiss Nifty 100 </span></span>
          <span>Quality 30 Index Fund - Regular Plan - Growth</span>
          <span>
            <button className='fundbtn active' onClick={changeColor}>Equity</button>
            <button className='fundbtn' onClick={changeColor}>Index Funds - Other</button>
            <button className='fundbtn' onClick={changeColor}>Index Funds - Other</button>
          </span>
        </td>
        <td><span className='rank'>8</span></td>
        <td><span className='rank'>8</span></td>
        <td>
          <FaStar style={{color:'orange',fontSize:"0.9rem"}}/>
          <FaStar style={{color:'orange',fontSize:"0.9rem"}}/>
          <FaStar style={{color:'orange',fontSize:"0.9rem"}}/>
          <FaStar style={{color:'orange',fontSize:"0.9rem"}}/>
          <FaStar style={{color:'orange',fontSize:"0.9rem"}}/>
        </td>
        <td><div><FaThumbsUp style={{color:'white'}}/></div></td>
        <td><div><FaThumbsUp style={{color:'white'}}/></div></td>
        <td><FaIndianRupeeSign /><p>11.53</p></td>
        <td>0.00%</td>
        <td>0.00%</td>
        <td>0.00%</td>
        <td>15.30%</td>
        <td>
          <button className='invest'>invest</button>
          <button className='watchlist'><FaPlus /> Watchlist</button>
        </td>
      </tr>
    );
  }

  return (
    <div className='ResultBody'>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Funds</th>
              <th>Overall Rank <span><FaCaretUp /><FaCaretDown /></span></th>
              <th>Category Rank <span><FaCaretUp /><FaCaretDown /></span></th>
              <th>MF Rating</th>
              <th>Fund Sahi hai?</th>
              <th>Time to Invest?</th>
              <th>NAV <span><FaCaretUp style={{color:"blue"}} /></span></th>
              <th>1Y <span><FaCaretUp /><FaCaretDown /></span></th>
              <th>3Y <span><FaCaretUp /><FaCaretDown /></span></th>
              <th>5Y <span><FaCaretUp /><FaCaretDown /></span></th>
              <th>Since Inception <span><FaCaretUp /><FaCaretDown /></span></th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ResultBody;
