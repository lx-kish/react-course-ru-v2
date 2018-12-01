import React from 'react';

import { Add } from './components/Add';
import { News } from './components/News';
import newsData from './data/newsData';

import './App.css';
	
class App extends React.Component {
	state = {
		news: newsData
	}
	
	handleAddNews = (data) => {
		//console.log(data)
		const nextNews = [data, ...this.state.news]
		this.setState({ news: nextNews })
		//console.log('I\'ve called from Add, but has access to this.state of App', this.state)
	}
		
	render() {
	
		return (
			<React.Fragment>
				<Add onAddNews={this.handleAddNews}/>
				<h3>News</h3>
				<News data={this.state.news}/>
			</React.Fragment>
		)
	}
}

export default App;