import React from 'react';

const SearchBox=({searchfield,searchChange})=>{
	return(
		<div className='pa2'>
		<input
		  className='pa3 ba b--green bg-lightest-blue' 
		  style={{borderRadius:10,width:240}}
		  type='search' 
		  placeholder='Search items...'
		  onChange={searchChange}
		 />
		 </div>
		);
}

export default SearchBox;