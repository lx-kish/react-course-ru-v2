import React from 'react';
import PropTypes from 'prop-types';

class Add extends React.Component {
	
	state = {
		name: '',
		text: '',
		bigText: '',
		checkrule: false
	}
		
	handleChange = (e) => {
		const { id, value } = e.currentTarget
		this.setState({ [id]: value })
	}
		
	onChangeNewsText = (e) => {
		this.setState({ text: e.currentTarget.value })
	}
		
	fieldsValidation = () => {
		const { name, text, checkrule } = this.state
		if( name.trim() && text.trim() && checkrule ) {
			return true
		}
		return false
	}
		
	onChangeCheckrule = (e) => {
		this.setState({ checkrule: e.currentTarget.checked })
	}
		
	onBtnClickHandler = (e) => {
		e.preventDefault()
		const { name, text, bigText } = this.state
		this.props.onAddNews({ 
			id: +new Date(),
			author: name,
			text, bigText
		})
	}
		
	render() {
		const { name, text, bigText } = this.state
		return (
			<React.Fragment>
				<form className='add'>
					<input 
						id='name'
						type='text'
						className='add__author'
						placeholder='input author name'
						onChange={this.handleChange}
						value={name}
					/>
					<textarea 
						id='text'
						className='add__text'
						placeholder='news text'
						onChange={this.handleChange}
						value={text}
					></textarea>
					<textarea 
						id='bigText'
						className='add__bigText'
						placeholder='news full text'
						onChange={this.handleChange}
						value={bigText}
					></textarea>
					<label className='add__checkrule'>
						<input
							type='checkbox'
							onChange={this.onChangeCheckrule}
						/>I'm agree with the rules
					</label>
					<button 
						className='add__btn'
						onClick={this.onBtnClickHandler}
						disabled={!this.fieldsValidation()}
					>Add news</button>
				</form>
			</React.Fragment>
		)
	}
}
	
Add.propTypes = {
	onAddNews: PropTypes.func.isRequired
}

export { Add }