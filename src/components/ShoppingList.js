import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search,setSearch]=useState("")
  function onSearchChange (event) {
    setSearch(event.target.value)
    
  }
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All"){return true}
    else if ( selectedCategory===item.category){return selectedCategory}
    else if(search===''){return true}
    else(search===item.name);{return search};
    
  })
   
   

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange ={onSearchChange} search={search}/>
      <ul className="Items">
     
        {
        itemsToDisplay.map((item) => {
          
          return <Item key={item.id} name={item.name} category={item.category} />
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
