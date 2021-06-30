import React from 'react';
import Card from './Card';

const Cardlist=({items})=>{
	return(
	<div>
	{
	  items.map((user,idx) =>{
	  return(<Card key={idx} 
		           id={items[idx].id} 
		           name={items[idx].name} 
		           ad={items[idx].ad}/>);
	})
	 }
   </div>
		);
}

export default Cardlist;