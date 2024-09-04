import {useEffect, useState } from "react";
import Products from "../products/Products";

const Search = () => {
    const [meal, setMeal] = useState('chicken')
    const [mealData, setMealData] = useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
       .then(response => response.json())
       .then(data => setMealData(data.meals))
    },[meal])

    function handleSearchChange(e:React.FocusEvent<HTMLInputElement>) {
        console.log(e.target.value);
        setMeal(e.target.value)
    }

    console.log(meal);
    
  return (
    <>
      <div className="grid items-center justify-center justify-items-center pt-5">
        <h1 className="text-4xl sm:text-5xl font-semibold text-yellow-500 mb-2">
          Shawon Food Store
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">Let's search your favorite<span className="text-yellow-500">fooood!!!</span></h2>
        <div className="flex gap-2">
          <input type="text" placeholder="search food name" className="input input-bordered hover:w-full max-w-xs capitalize rounded" onBlur={handleSearchChange}/>
          <button className="btn btn-success text-base-200 w-fit max-w-xs uppercase rounded">Search</button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 items-center justify-center justify-items-center mt-10">
        {
          mealData.map((mealItem, index)=> <Products key={index} mealItem={mealItem}/>)
        }
      </div>
    </>
  );
};

export default Search;
