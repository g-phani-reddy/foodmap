import React,{ Component } from 'react';
import Cardlist from './Cardlist';
import {items} from './items';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
class App extends Component{
	constructor(){
		super()
		this.state={
			items: [],
			searchfield:''
		}
	}
	componentDidMount(){
		this.setState({items: items});
	}
	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value })
	}
	render(){
		const filteredRobots=this.state.items.filter(items =>{
			return items.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
	return (
		<div className='tc linear-gradient(to right, rgb(173, 235, 173), rgb(173, 123, 123));' >
    		<h1 className='f2' style={{color:"rgb(28, 59, 28)",fontFamily: 'Droid Sans',fontSize:"60px"}}>South Indian</h1>
    		<SearchBox searchChange={this.onSearchChange}/>
    		<Scroll>
			<Cardlist items={filteredRobots}/>
			</Scroll>
		</div>
		);
    }
}

export default App;