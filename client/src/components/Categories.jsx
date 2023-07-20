import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";
import axios from 'axios';

function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/category");
        console.log(response.data);
        setCategories(response.data);
      } catch (error) {
        console.log(error, 'hatam var');
      }
    };

    fetchData();
  }, []);

  

  return (
    <div>
      <div className="columns">
        {
          categories.map ((item,index)=> {
             return  <div className="column"><Recipe key={index} item={item}/></div>
          })
        }
       
      </div>
    </div>
  );
}

export default Categories;
