import React from 'react';
import pizza from '../images/pizza.png';
import "../style/layout/main.scss"

function Main() {
  return (
    <div className='main_divs'>
        <div className='desc_part'>
            <h1>Tasty Food <br/>
               <span>Collections</span>
            </h1>
            <p>To provide nutritial suport for an organism.<br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, voluptates temporibus? Omnis placeat itaque modi recusandae harum voluptate. Deserunt, at! </p>
        </div>
        <div>
            <img src={pizza} className='pizza'/>
        </div>
    </div>
  )
}

export default Main