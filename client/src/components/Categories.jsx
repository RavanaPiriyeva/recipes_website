import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";
import axios from 'axios';

function Categories() {

  const[categories,setCategories] = useState([])

  useEffect(()=>{
      const categ = axios.get("http://localhost:3000/api/category")
                    .then(res=> console.log(res))
                    .catch(err=> console.log(err,'hatam var'))
  },
  [])

  

  return (
    <div>
      <div className="columns">
        <div className="column"><Recipe/></div>
        <div className="column"><Recipe/></div>
        <div className="column"><Recipe/></div>
        <div className="column"><Recipe/></div>
      </div>
    </div>
  );
}

export default Categories;
