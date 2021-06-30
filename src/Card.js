import React from 'react';
const openInNewTab = (url) => {
  var res = encodeURI(url);
  const newWindow = window.open(res, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const Card=({name,id,ad})=>{
	return(
		<div className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5' style={{height:250,width:200}}>
		  <img alt='items' src={id} height='100' width='100'/>
		   <div>
		   <h2>{name}</h2>
		   <button style={{backgroundColor:"lightgreen",fontWeight: 'bold',borderRadius:10,height:40}}onClick={() => openInNewTab(ad)}>Connect</button>
		   </div>
		   </div>
		);
}

export default Card;