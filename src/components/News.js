import React from 'react';
import PropTypes from 'prop-types';
import { Article } from './Article';

class News extends React.Component {
		
	state = {
		filteredNews: this.props.data
	}
		
	componentWillReceiveProps(nextProps) {
		let nextFilteredNews = [...nextProps.data]
		
		nextFilteredNews.forEach((item, index) => {
			if(item.bigText.toLowerCase().indexOf('pubg') !== -1) {
				item.bigText = 'SPAM'
			}
		})
		
		this.setState({filteredNews: nextFilteredNews})
	}
	
	renderNews = () => {
		const { filteredNews } = this.state
		let newsTemplate = null
			
		if (filteredNews.length) {
			newsTemplate = filteredNews.map(function(item){
				return <Article key={item.id} data={item} />
			})
		} else {
			newsTemplate = <p>Unfortunately, here are no news</p>
		}
			
		return newsTemplate
	}
	render() {
		const { filteredNews } = this.state
		
		return (
			<div className="news">
				{this.renderNews()}
				{
					filteredNews.length ? <strong className={'news__count'}>Total news: {filteredNews.length}</strong> : null
				}
			</div>
		);
	}
		
}

News.propTypes = {
	data: PropTypes.array.isRequired
}

export { News }